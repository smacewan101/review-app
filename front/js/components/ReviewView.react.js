var React = require('react');
var ReviewFormView = require('./ReviewFormView.react');
var SidebarRightView = require('./SidebarRightView.react');
var ReviewStore = require('../stores/ReviewStore');

function getState(){
	var reviews = ReviewStore.getAllReviews();
	if(reviews.length > 0){
		reviews = reviews.reverse();
	}
	return {
		reviews: reviews
	}
}
var ReviewView = React.createClass({
	getInitialState: function(){
		ReviewStore.reinitialize();
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
				<h1>This is the Review Page</h1>
				<ReviewFormView cssWidth="9"/>
				<SidebarRightView reviews={this.state.reviews} cssWidth="3"/>
			</div>
		);
	},

	_onChange: function(){
		this.setState(getState());
	}
});

module.exports = ReviewView;