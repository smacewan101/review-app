var React = require('react');
var Router = require('react-router');
var Actions = require('../actions/Actions');
var UserStore = require('../stores/UserStore');
var Link = Router.Link;

var LogoutButtonView = React.createClass({

	logout: function(){
		Actions.logout();
	},

	render: function(){
		return (
			<li>Logged in as Scott <button className="btn" onClick={this.logout}>Logout</button></li>
		);
	}

});

module.exports = LogoutButtonView;