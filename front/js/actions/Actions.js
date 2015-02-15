var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionConstants = require('../constants/ActionConstants');

// Define actions object
var Actions = {

  // Receive inital product data
  login: function() {
    AppDispatcher.handleAction({
      actionType: ActionConstants.LOGIN
    })
  },

  // Set currently selected product variation
  logout: function() {
    AppDispatcher.handleAction({
      actionType: ActionConstants.LOGOUT
    })
  }
};

module.exports = Actions;