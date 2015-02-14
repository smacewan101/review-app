var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var UserStore = require('../stores/UserStore');
var NavbarView = require('./NavbarView.react');

var AppView = React.createClass({
	getInitialState: function(){
		return {
		  loggedIn: UserStore.isLoggedIn()
		}
	},

	  // Add change listeners to stores
	componentDidMount: function() {
		UserStore.addChangeListener(this._onChange);
	},

	// Remove change listers from stores
	componentWillUnmount: function() {
		UserStore.removeChangeListener(this._onChange);
	},

	render: function () {
		return (
			<div className="container">
				<NavbarView loggedIn={this.state.loggedIn}/>
				<RouteHandler/>
			</div>
		);
	},

	_onChange: function(){
		this.setState(this.getInitialState());
	}
});

module.exports = AppView;