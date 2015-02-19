var React = require('react');
var Router = require('react-router');
var Actions = require('../actions/Actions');
var LoginButtonView = require("./LoginButtonView.react");
var LogoutButtonView = require("./LogoutButtonView.react");
var Link = Router.Link;

var NavbarView = React.createClass({
	render: function () {
		var actionButton;
		if(this.props.loggedIn){
			actionButton = <LogoutButtonView userEmail={this.props.user.email} />;
		}else{
			actionButton = <LoginButtonView />;
		}

		return (
			<nav className="navbar navbar-default">
				<ul className="nav navbar-nav">
					<li><Link to="app">Dashboard</Link></li>
					<li><Link to="createReview">Review</Link></li>
					<li><Link to="reviewDashboard">Browse Reviews</Link></li>
					{actionButton}
				</ul>
			</nav>
		);
	}
});

module.exports = NavbarView;