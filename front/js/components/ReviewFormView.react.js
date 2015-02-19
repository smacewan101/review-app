var React = require('react');
var Actions = require('../actions/Actions');

var ReviewFormView = React.createClass({
	render: function () {
		var classString = (this.props.cssWidth) ? "col-md-" + this.props.cssWidth : "col-md-9";
		return (
			<div className={classString}>
				<form>
					<div className="form-group">
						<label htmlFor="review-title">Title</label>
						<input className="form-control" name="review-title" type="text" ref="reviewTitle"/>
					</div>
					<div className="form-group">
						<label htmlFor="review-content">Review</label>
						<textarea className="form-control" name="review-content" rows="20" ref="reviewContent"></textarea>
					</div>
					 <button className="btn btn-default" onClick={this.submitForm}>Submit</button>
				</form>
			</div>
		);
	},

	submitForm: function (e) {
		e.preventDefault();
		var title = this.refs.reviewTitle.getDOMNode().value,
			content = this.refs.reviewContent.getDOMNode().value;
		
		var formData = {
			title: title,
			content: content
		};

		Actions.postReview(formData);
	}
});

module.exports = ReviewFormView;