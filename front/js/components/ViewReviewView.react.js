var React = require('react');
var ReviewFormView = require('./ReviewFormView.react');
var SidebarRightView = require('./SidebarRightView.react');
var ReviewStore = require('../stores/ReviewStore');
var Router = require('react-router');

function getState(){
	return {
		review: ReviewStore.getAllReviews().reverse()
	}
}
var ViewReviewView = React.createClass({
	mixins: [Router.State],
	getInitialState: function(){
		return getState();
	},

	 // Add change listeners to stores
	componentDidMount: function() {
		ReviewStore.addChangeListener(this._onChange);
	},

	// Remove change listers from stores
	componentWillUnmount: function() {
		ReviewStore.removeChangeListener(this._onChange);
	},

	render: function () {
		return (
			<div className="row">
				<h1>View a review</h1>
			</div>
		);
	},

	_onChange: function(){
		this.setState(getState());
	}
});

module.exports = ViewReviewView;