var _ = require('underscore');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionConstants = require("../constants/ActionConstants");
var FailureConstants = require("../constants/FailureConstants");

var _failures = {};

function setFailure(failureCode, failureMessage){
	_failures[failureCode] = failureMessage;
}

function clearFailure(failureCode){
	delete _failures[failureCode];
}

var FailureStore = _.extend({}, EventEmitter.prototype, {

	isSet: function(failureCode){
		return (_failures[failureCode] != null);
	},

	getFailureMessage: function(failureCode){
		return _failures[failureCode];
	},

	getAllFailures: function(){
		return _failures;
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

    // Respond to login action
    case ActionConstants.SET_FAILURE:
      setFailure(action.failureCode, action.failureMessage);
      break;

    // Respond to login action
    case ActionConstants.LOGIN_SUCCESS:
      clearFailure(FailureConstants.LOGIN_FAILED);
      break;

  }

  // If action was responded to, emit change event
  FailureStore.emitChange();
  return true;

});

module.exports = FailureStore;