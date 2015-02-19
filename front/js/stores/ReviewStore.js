var _ = require('underscore');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionConstants = require("../constants/ActionConstants");
var ReviewApi = require('../utils/ReviewApi');
var MessageCodeConstants = require("../constants/MessageCodeConstants");

var _reviews = {};
var _currentReview = null;

function postReview(reviewData){
	ReviewApi.postReview(reviewData);
}

function saveNewReview(reviewData){
	reviewData.id = _reviews.length + 1;
	ReviewApi.saveReview(reviewData);
	ReviewApi.getReviews();
}

function setCurrentReview(review){
	_currentReview = review;
}

function setReviewCollection(reviewData){
	if(reviewData != undefined){
		_reviews = reviewData;
	}else{
		_reviews = {};
	}
	
}

var ReviewStore = _.extend({}, EventEmitter.prototype, {
	reinitialize: function(reviewId){
		_currentReview = null;
		_reviews = {};
		ReviewApi.getReviews();
		if(reviewId != null){
			ReviewApi.getReview(reviewId);	
		}
	},

	getCurrentReview: function(){
		return _currentReview;
	},

	getAllReviews: function(){
		return _reviews;
	},

	// Emit Change event
	emitChange: function() {
		this.emit('change');
	},

	// Add change listener
	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	// Remove change listener
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.actionType) {

    case ActionConstants.POST_REVIEW:
		postReview(action.reviewData);
		break;

	case ActionConstants.SAVE_NEW_REVIEW:
		saveNewReview(action.reviewData);
		break;

	case ActionConstants.SET_CURRENT_REVIEW:
		setCurrentReview(action.reviewData);
		break;

	case ActionConstants.SET_REVIEWS:
		setReviewCollection(action.reviewsData);
		break;

  }

  // If action was responded to, emit change event
  ReviewStore.emitChange();
  return true;

});

module.exports = ReviewStore;