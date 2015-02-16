package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._
import play.api.libs.functional.syntax._
import scala.collection.mutable.ListBuffer
import play.api.db._
import play.api.Play.current
import anorm._ 


object Review extends Controller {

  case class Review(title: String, content:String) {
		var id:Long = 0 
	}

  implicit val reviewWriter = new Writes[Review] {
		def writes(r: Review): JsValue = {
			Json.obj(
				"title" -> r.title,
				"content" -> r.content,
				"id" -> r.id
			)
		}
	}

	implicit val reviewReader: Reads[Review] = (
		(__ \ "title").read[String] and 
		(__ \ "content").read[String]
	)(Review) 

	val reviews = ListBuffer[Review]()

	var idx = 2

	val ds = DB.getDataSource()

	def show(id: Int) =  Action { 
		DB.withConnection { implicit conn => 
			val firstRow = SQL("Select id, title, description From reviews Where id = {id}")
				.on("id" -> id).apply().head
			val title = firstRow[String]("title")
			val content = firstRow[String]("content")
			val review = new Review(title, content)
			review.id = firstRow[Int]("id")
			Ok(Json.toJson(review))
		}
		NotFound("Not found")
	}

	def create =  Action { request => 
		request.body.asJson.map { json => 
			json.validate[Review].map{
				case r => { 
					DB.withConnection { implicit conn =>
							val id: Option[Long] = SQL("insert into reviews(title, content) values ($r.title, $r.content)").executeInsert()
							println(s"New Review created with id: $id")
					}
					Ok("Create")
				}
			}.recoverTotal {
				e => BadRequest("Detected error:"+ JsError.toFlatJson(e))
			}
		}.getOrElse{
			BadRequest("Could not parse data")
		}
	}

  def list =  Action {
		var reviews = List[Review]()
		DB.withConnection { implicit conn =>
			val selectReviews = SQL("select * from reviews")
			reviews = selectReviews().map(row => {
					val title = row[String]("title")
					val content = row[String]("content")
					val review = new Review(title, content)
					review.id = row[Long]("id")
					review 
				}
			).toList
		}
		Ok(Json.toJson(reviews))
	}

	def preflight(all: String) = Action {
	  Ok("").withHeaders("Access-Control-Allow-Origin" -> "*",
	    "Allow" -> "*",
	    "Access-Control-Allow-Methods" -> "POST, GET, PUT, DELETE, OPTIONS",
	    "Access-Control-Allow-Headers" -> "Origin, X-Requested-With, Content-Type, Accept, Referrer, User-Agent");
	 }
}
