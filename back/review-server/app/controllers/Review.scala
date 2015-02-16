package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._
import play.api.libs.functional.syntax._
import scala.collection.mutable.ListBuffer


object Review extends Controller {
	
  case class Review(name: String, description:String) {
		var id = 0 
	}

  implicit val reviewWriter = new Writes[Review] {
		def writes(r: Review): JsValue = {
			Json.obj(
				"name" -> r.name,
				"description" -> r.description,
				"id" -> r.id
			)
		}
	}

	implicit val reviewReader: Reads[Review] = (
		(__ \ "name").read[String] and 
		(__ \ "description").read[String]
	)(Review) 

	val reviews = ListBuffer[Review]()

	var idx = 2

	def show(id: Int) = Action { 
		Ok(Json.toJson(reviews.find(review => review.id == id)))
	}

	def create = Action { request => 
		request.body.asJson.map { json => 
			json.validate[Review].map{
				case r => { 
					r.id = idx
					reviews += r; 
					idx += 1
					Ok("Create")
				}
			}.recoverTotal {
				e => BadRequest("Detected error:"+ JsError.toFlatJson(e))
			}
		}.getOrElse{
			BadRequest("Could not parse data")
		}
	}

  def list = Action {
		Ok(Json.toJson(reviews.toList))
	}


}
