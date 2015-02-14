var React = require('react');

var ReviewFormView = React.createClass({
	render: function () {
		var classString = (this.props.cssWidth) ? "col-md-" + this.props.cssWidth : "col-md-9";
		return (
			<div className={classString}>
				<form>
					<div className="form-group">
						<label for="review-content">Review Content</label>
						<textarea className="form-control" name="review-content"></textarea>
					</div>
					 <button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
});

module.exports = ReviewFormView;