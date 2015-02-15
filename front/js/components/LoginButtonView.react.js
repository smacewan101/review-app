var React = require('react');
var Actions = require('../actions/Actions');
var UserStore = require('../stores/UserStore');

var LoginButtonView = React.createClass({

	login: function(){
		Actions.login();
	},

	render: function(){
		return (
			<li><button className="btn" onClick={this.login}> Login</button></li>
		);
	}

});

module.exports = LoginButtonView;