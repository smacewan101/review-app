var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionConstants = require('../constants/ActionConstants');

// Define actions object
var Actions = {

  // Receive inital product data
  login: function(email, password) {
    AppDispatcher.handleAction({
      actionType: ActionConstants.LOGIN,
      email: email,
      password: password
    })
  },

  // Set currently selected product variation
  logout: function() {
    AppDispatcher.handleAction({
      actionType: ActionConstants.LOGOUT
    })
  },

  loginSucess: function(userData) {
    AppDispatcher.handleAction({
      actionType: ActionConstants.LOGIN_SUCCESS,
      user: userData
    })
  },

  setFailure: function(failureCode, failureMessage) {
    AppDispatcher.handleAction({
      actionType: ActionConstants.SET_FAILURE,
      failureCode: failureCode,
      failureMessage: failureMessage
    })
  }
};

module.exports = Actions;