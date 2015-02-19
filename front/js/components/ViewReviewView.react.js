var React = require('react');
var ReviewFormView = require('./ReviewFormView.react');
var SidebarRightView = require('./SidebarRightView.react');
var ReviewStore = require('../stores/ReviewStore');
var ReviewApi = require('../utils/ReviewApi');
var Router = require('react-router');

function getState(){
	var reviews = ReviewStore.getAllReviews();
	if(reviews.length > 0){
		reviews = reviews.reverse();
	}
	return {
		reviews: reviews,
		currentReview: ReviewStore.getCurrentReview()
	}
}

var ViewReviewView = React.createClass({
	mixins: [Router.State],
	getInitialState: function(){
		ReviewStore.reinitialize(this.getParams().reviewId);
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
		var reviewView;
		if(this.state.currentReview){
			reviewView = (<div className="col-md-9">
					<h3>{this.state.currentReview.title}</h3>
					<div>{this.state.currentReview.content}</div>
				</div>);
		}else{
			reivewView = (<div className="col-md-9"></div>);
		}
		return (
			<div className="row">
				<h1>View a review</h1>
				{reviewView}
				<SidebarRightView reviews={this.state.reviews} />
			</div>
		);
	},

	_onChange: function(){
		this.setState(getState());
	}
});

module.exports = ViewReviewView;