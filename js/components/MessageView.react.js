var React = require('react');
var MessageTypeConstants = require('../constants/MessageTypeConstants');
var Alert = require('react-bootstrap').Alert;

var MessageView = React.createClass({
	render: function () {
		var messages = this.props.messages;
		var self = this;
		console.log(messages);
		return (
			<div>
			{Object.keys(messages).map(function(message){
				return self.getMessageHtml(messages[message].messageText, messages[message].messageType);
			})}
			</div>
		);
	},

	getMessageHtml: function(messageText, messageType){
		var message;
		switch(messageType){
			case MessageTypeConstants.SUCCESS:
				return (
					<Alert bsStyle="success">{messageText}</Alert>
				)
				break;

			case MessageTypeConstants.FAILURE:
				return (
					<Alert bsStyle="danger">{messageText}</Alert>
				)
				break;

			case MessageTypeConstants.INFO:
				return (
					<Alert bsStyle="info">{messageText}</Alert>
				)
				break;

			case MessageTypeConstants.WARNING:
				return (
					<Alert bsStyle="warning">{messageText}</Alert>
				)
				break;
			default:
				return "";
				break;
		}
	}
});

module.exports = MessageView;