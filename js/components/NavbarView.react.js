var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NavbarView = React.createClass({
	render: function () {
		return (
			<nav className="navbar navbar-default">
				<ul className="nav navbar-nav">
					<li><Link to="app">Dashboard</Link></li>
					<li><Link to="review">Review</Link></li>
					<li><Link to="app">Logged in as Scott</Link></li>
				</ul>
			</nav>
		);
	}
});

module.exports = NavbarView;