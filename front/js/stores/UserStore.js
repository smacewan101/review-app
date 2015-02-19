var _ = require('underscore');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UserApi = require("../utils/UserApi");
var ActionConstants = require("../constants/ActionConstants");

var _user = null, _loggedIn = false;

function loginSuccess(userData) {
  _loggedIn = true;
  _user = userData;
}

function login(email, password) {
  UserApi.loginUser(email, password);
}

function logout(){
  _loggedIn = false;
  _user = null;
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var UserStore = _.extend({}, EventEmitter.prototype, {

  // Return cart visibility state
  isLoggedIn: function() {
    return _loggedIn;
  },

  getUser: function(){
    return _user;
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
    case ActionConstants.LOGIN:
      login(action.email, action.password);
      break;

    // Respond to login action
    case ActionConstants.LOGOUT:
      logout();
      break;

    case ActionConstants.LOGIN_SUCCESS:
      loginSuccess(action.user);
      break;
  }

  // If action was responded to, emit change event
  UserStore.emitChange();
  return true;

});


module.exports = UserStore;