var React = require('react');
var ReviewFormView = require('./ReviewFormView.react');
var SidebarRightView = require('./SidebarRightView.react');

var ReviewView = React.createClass({
	render: function () {
		return (
			<div className="row">
				<h1>This is the Review Page</h1>
				<ReviewFormView cssWidth="9"/>
				<SidebarRightView cssWidth="3"/>
			</div>
		);
	}
});

module.exports = ReviewView;