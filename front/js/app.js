var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var AppView = require("./components/AppView.react");
var DashboardView = require("./components/DashboardView.react");
var ReviewView = require("./components/ReviewView.react");
var InitialData = require('./InitialData');

InitialData.init();

var routes = (
  <Route name="app" path="/" handler={AppView}>
    <Route name="review" handler={ReviewView} />
    <DefaultRoute handler={DashboardView}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});