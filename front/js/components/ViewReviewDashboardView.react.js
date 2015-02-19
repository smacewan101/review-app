var React = require('react');
var ReviewFormView = require('./ReviewFormView.react');
var SidebarRightView = require('./SidebarRightView.react');
var ReviewStore = require('../stores/ReviewStore');
var Router = require('react-router');
var Link = Router.Link;

function getState(){
	var reviews = ReviewStore.getAllReviews();
	if(reviews.length > 0){
		reviews = reviews.reverse();
	}
	return {
		reviews: reviews
	}
}
var ViewReviewDashboardView = React.createClass({
	mixins: [Router.State],
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
		var reviews = this.state.reviews;
		return (
			<div className="row">
				<h1>Browse Reviews</h1>
				{Object.keys(reviews).map(function(review){
					return(
						<div key={review}>
							<h3><Link to="review" params={{reviewId: reviews[review].id}}>{reviews[review].title}</Link></h3>
							<p>{reviews[review].content.substring(0,15) + "..."}</p>
						</div>
					)
				})}
			</div>
		);
	},

	_onChange: function(){
		this.setState(getState());
	}
});

module.exports = ViewReviewDashboardView;