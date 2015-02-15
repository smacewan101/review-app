var React = require('react');
var Actions = require('../actions/Actions');
var UserStore = require('../stores/UserStore');

var LoginButtonView = React.createClass({

	login: function(e){
		e.preventDefault();
		var email = this.refs.loginEmail.getDOMNode().value,
			password = this.refs.loginPassword.getDOMNode().value;
		Actions.login(email, password);
	},

	render: function(){
		return (
			<li>
				<form className="form-inline">
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input className="form-control" name="email" type="text" id="loginEmail" ref="loginEmail"/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input className="form-control" name="password" type="password" id="loginPassword" ref="loginPassword"/>
					</div>
					<button className="btn btn-default" onClick={this.login}>Login</button>
				</form>
			</li>
		);
	}
});

module.exports = LoginButtonView;