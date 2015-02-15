var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  SUCCESS: "MESSAGETYPE1",
  FAILURE: "MESSAGETYPE2",
  WARNING: "MESSAGETYPE3",
  INFO: "MESSAGETYPE4"
});