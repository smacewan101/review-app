name := """review-server"""

version := "1.0-SNAPSHOT"

lazy val commonSettings = Seq(
	organization := "net.radreviews",
	scalaVersion := "2.11.1",
	version := "0.1.0"
)

lazy val root = (project in file(".")).enablePlugins(PlayScala).
	settings(commonSettings:_*)

scalaVersion := "2.11.1"


libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  ws
)
