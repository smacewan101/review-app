var React = require('react');

var MessageView = React.createClass({
	render: function () {
		var messages = this.props.failures;
		return (
			<div>
			{Object.keys(messages).map(function(message){
				return (
					<li key={message}>
						<div className="alert alert-danger" role="alert">{messages[message]}</div>
					</li>
				)
			})}
			</div>
		);
	}
});

module.exports = MessageView;