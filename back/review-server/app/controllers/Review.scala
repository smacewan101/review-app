package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._
import play.api.libs.functional.syntax._


object Review extends Controller {
	
  case class Review(name: String, description:String)	

	
  def list = Action {
		val reviews = List(
			new Review("H",  "description and stuff like that")
		)

		implicit val reviewWriter = new Writes[Review] {
			def writes(r: Review): JsValue = {
				Json.obj(
					"name" -> r.name,
					"description" -> r.description
				)
			}
		}

		Ok(Json.toJson(reviews))
	}

}
