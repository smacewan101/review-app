var React = require('react');

var SidebarRightView = React.createClass({
	render: function () {
		var classString = (this.props.cssWidth) ? "col-md-" + this.props.cssWidth: "col-md-3";
		return (
			<div className={classString}>
				<p>This is a component or something</p>
			</div>
		);
	}
});

module.exports = SidebarRightView;