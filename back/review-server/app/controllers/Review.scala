package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._
import play.api.libs.functional.syntax._
import scala.collection.mutable.ListBuffer


object Review extends Controller {
	
  case class Review(name: String, description:String)	

  implicit val reviewWriter = new Writes[Review] {
		def writes(r: Review): JsValue = {
			Json.obj(
				"name" -> r.name,
				"description" -> r.description
			)
		}
	}

	implicit val reviewReader: Reads[Review] = (
		(__ \ "name").read[String] and 
		(__ \ "description").read[String]
	)(Review) 

	val reviews = ListBuffer[Review](
			new Review("H",  "description and stuff like that")
	)

	def create = Action { request => 
		request.body.asJson.map { json => 
			json.validate[Review].map{
				case r => reviews += r; Ok("Create")
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
