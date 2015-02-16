var React = require('react');
var Alert = require('react-bootstrap').Alert;
var Actions = require('../actions/Actions');
var MessageTypeConstants = require("../constants/MessageTypeConstants");

var DismissableMessage = React.createClass({
  render: function() {
    var message = this.props.messageText,
        messageCode = this.props.messageCode;

    var messageType;
    switch(this.props.messageType){
      case MessageTypeConstants.SUCCESS:
        messageType = "success"
        break;

      case MessageTypeConstants.FAILURE:
        messageType = "danger"
        break;

      case MessageTypeConstants.INFO:
        messageType = "info"
        break;

      case MessageTypeConstants.WARNING:
        messageType = "warning"
        break;

      default:
        return "";
        break;
    }

    return (
      <Alert bsStyle={messageType} onDismiss={this.handleAlertDismiss} key={messageCode}>
        {message}
      </Alert>
    );
  },

  handleAlertDismiss: function() {
    Actions.clearMessage(this.props.messageCode);
  }
});

module.exports = DismissableMessage;