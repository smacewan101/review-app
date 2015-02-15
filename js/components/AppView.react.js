var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var UserStore = require('../stores/UserStore');
var FailureStore = require('../stores/FailureStore');
var NavbarView = require('./NavbarView.react');
var MessageView = require('./MessageView.react.js');

function getState(){
	return {
		loggedIn: UserStore.isLoggedIn(),
		user: UserStore.getUser(),
		failures: FailureStore.getAllFailures()
	}
}

var AppView = React.createClass({
	getInitialState: function(){
		return getState();
	},

	 // Add change listeners to stores
	componentDidMount: function() {
		FailureStore.addChangeListener(this._onChange);
		UserStore.addChangeListener(this._onChange);
	},

	// Remove change listers from stores
	componentWillUnmount: function() {
		FailureStore.removeChangeListener(this._onChange);
		UserStore.removeChangeListener(this._onChange);
	},

	render: function () {
		return (
			<div className="container">
				<NavbarView loggedIn={this.state.loggedIn} user={this.state.user}/>
				<MessageView failures={this.state.failures} />
				<RouteHandler/>
			</div>
		);
	},

	_onChange: function(){
		this.setState(getState());
	}
});

module.exports = AppView;