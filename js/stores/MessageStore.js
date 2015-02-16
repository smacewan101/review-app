var _ = require('underscore');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionConstants = require("../constants/ActionConstants");
var MessageCodeConstants = require("../constants/MessageCodeConstants");

var _messages = {};

function setMessage(messageCode, messageText, messageType){
	_messages[messageCode] = {messageText: messageText, messageType: messageType};
}

function clearMessage(messageCode){
	delete _messages[messageCode];
}

function clearAllMessages(){
	_messages = {};
}

var MessageStore = _.extend({}, EventEmitter.prototype, {

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

    // Respond to login action
    case ActionConstants.SET_MESSAGE:
      setMessage(action.messageCode, action.messageText, action.messageType);
      break;

	case ActionConstants.CLEAR_MESSAGE:
		clearMessage(action.messageCode);
		break;

	case ActionConstants.CLEAR_ALL_MESSAGES:
		clearAllMessages();
		break;

    // Respond to login action
    case ActionConstants.LOGIN_SUCCESS:
		clearMessage(MessageCodeConstants.LOGIN_FAILED);
		break;
  }

  // If action was responded to, emit change event
  MessageStore.emitChange();
  return true;

});

module.exports = MessageStore;