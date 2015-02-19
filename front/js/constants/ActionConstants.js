var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  LOGIN: null,
  LOGOUT: null,
  LOGIN_SUCCESS: null,
  SET_MESSAGE: null,
  CLEAR_MESSAGE: null,
  CLEAR_ALL_MESSAGES: null,
  POST_REVIEW: null,
  SAVE_NEW_REVIEW: null
});