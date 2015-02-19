var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Actions = require("./actions/Actions");

var AppView = require("./components/AppView.react");
var DashboardView = require("./components/DashboardView.react");
var ReviewView = require("./components/ReviewView.react");
var ViewReviewView = require('./components/ViewReviewView.react');
var ViewReviewDashboardView = require('./components/ViewReviewDashboardView.react');
var InitialData = require('./InitialData');

InitialData.init();

var routes = (
  <Route name="app" path="/" handler={AppView}>
    <Route name="createReview" handler={ReviewView} />
    <Route name="reviewDashboard" handler={ViewReviewDashboardView} />
    <Route name="review" path="review/:reviewId" handler={ViewReviewView}/>
    <DefaultRoute handler={DashboardView}/>
  </Route>
);

Router.run(routes, function (Handler) {
	Actions.clearAllMessages();
  	React.render(<Handler/>, document.body);
});