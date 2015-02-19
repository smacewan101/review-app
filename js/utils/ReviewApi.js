var $ = require('jquery');
var Actions = require('../actions/Actions');
var MessageCodeConstants = require('../constants/MessageCodeConstants');
var MessageTypeConstants = require('../constants/MessageTypeConstants');

module.exports = {

	postReview: function(reviewData){
		var self = this;
		$.ajax({
			url: "http://192.168.0.102:9000/review/create",
			contentType: "application/json",
			type: "post",
			data: JSON.stringify(reviewData),
			success: function(returnData){
				console.log(returnData);
				setTimeout(function(){Actions.saveNewReview(reviewData);}, 1);
			},
			error: function(){
				setTimeout(function(){ Actions.setMessage(MessageCodeConstants.REVIEW_POST_FAIL, "Failed to save review. Please try again in a moment", MessageTypeConstants.FAILURE ); }, 1);
			}
		});
	},

	// Load mock product data from localStorage into ProductStore via Action
	getReviewData: function() {
		var data = JSON.parse(localStorage.getItem('review'));
		return data;
	},

	saveReview: function(reviewData){
		var data = this.getReviewData();
		data.push(reviewData);
		localStorage.setItem('review', JSON.stringify(data));
	}
};