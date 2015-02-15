var React = require('react');

var ReviewFormView = React.createClass({
	render: function () {
		var classString = (this.props.cssWidth) ? "col-md-" + this.props.cssWidth : "col-md-9";
		return (
			<div className={classString}>
				<form>
					<div className="form-group">
						<label htmlFor="review-title">Title</label>
						<input className="form-control" name="review-title" type="text" />
					</div>
					<div className="form-group">
						<label htmlFor="review-content">Review</label>
						<textarea className="form-control" name="review-content" rows="20"></textarea>
					</div>
					 <button className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
});

module.exports = ReviewFormView;