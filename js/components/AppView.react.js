var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var NavbarView = require('./NavbarView.react');

var AppView = React.createClass({
	render: function () {
		return (
			<div className="container">
				<NavbarView />
				<RouteHandler/>
			</div>
		);
	}
});

module.exports = AppView;