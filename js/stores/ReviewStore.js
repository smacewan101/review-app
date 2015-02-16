var _ = require('underscore');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionConstants = require("../constants/ActionConstants");
var ReviewApi = require('../utils/ReviewApi');
var MessageCodeConstants = require("../constants/MessageCodeConstants");

var _messages = {};

function postReview(reviewData){
	ReviewApi.postReview(reviewData);
}

var ReviewStore = _.extend({}, EventEmitter.prototype, {

	isSet: function(messageCode){
		return (_messages[messageCode] != null);
	},

	getMessage: function(messageCode){
		return _messages[messageCode];
	},

	getAllMessages: function(){
		return _messages;
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
  }

  // If action was responded to, emit change event
  ReviewStore.emitChange();
  return true;

});

module.exports = ReviewStore;