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

  setMessage: function(messageCode, messageText, messageType) {
    AppDispatcher.handleAction({
      actionType: ActionConstants.SET_MESSAGE,
      messageCode: messageCode,
      messageText: messageText,
      messageType: messageType
    })
  },

  clearMessage: function(messageCode) {
    AppDispatcher.handleAction({
      actionType: ActionConstants.CLEAR_MESSAGE,
      messageCode: messageCode
    })
  },

  clearAllMessages: function(){
    AppDispatcher.handleAction({
      actionType: ActionConstants.CLEAR_ALL_MESSAGES      
    })
  },

  postReview: function(reviewData){
    AppDispatcher.handleAction({
      actionType: ActionConstants.POST_REVIEW,
      reviewData: reviewData
    })
  },

  saveNewReview: function(reviewData){
    AppDispatcher.handleAction({
      actionType: ActionConstants.SAVE_NEW_REVIEW,
      reviewData: reviewData
    })
  },

  setCurrentReview: function(reviewData){
    AppDispatcher.handleAction({
      actionType: ActionConstants.SET_CURRENT_REVIEW,
      reviewData: reviewData
    })
  },

  setReviews: function(reviewsData){
    AppDispatcher.handleAction({
      actionType: ActionConstants.SET_REVIEWS,
      reviewsData: reviewsData
    })
  }
};

module.exports = Actions;