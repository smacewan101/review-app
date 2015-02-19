var React = require('react');

var SidebarRightView = React.createClass({
	render: function () {
		var classString = (this.props.cssWidth) ? "col-md-" + this.props.cssWidth: "col-md-3";
		var reviews = this.props.reviews;
		return (
			<div className={classString}>
				{Object.keys(reviews).map(function(review){
					return (
							<div key={review}>
								<h4>{reviews[review].title}</h4>
								<p>{reviews[review].content}</p>
							</div>
						)
				})}
			</div>
		);
	}
});

module.exports = SidebarRightView;