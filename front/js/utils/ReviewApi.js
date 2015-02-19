var $ = require('jquery');
var Actions = require('../actions/Actions');
var MessageCodeConstants = require('../constants/MessageCodeConstants');
var MessageTypeConstants = require('../constants/MessageTypeConstants');
// Load mock product data from localStorage into ProductStore via Action
function getReviewData() {
	var data = JSON.parse(localStorage.getItem('review'));
	
	return data;
}


module.exports = {

	postReview: function(reviewData){
		// var self = this;
		// $.ajax({
		// 	url: "",
		// 	contentType: "application/json",
		// 	type: "post",
		// 	data: JSON.stringify(reviewData),
		// 	success: function(returnData){
		// 		console.log(returnData);
		// 		setTimeout(function(){Actions.saveNewReview(reviewData);}, 1);
		// 	},
		// 	error: function(){
		// 		setTimeout(function(){ Actions.setMessage(MessageCodeConstants.REVIEW_POST_FAIL, "Failed to save review. Please try again in a moment", MessageTypeConstants.FAILURE ); }, 1);
		// 	}
		// });
		setTimeout(function(){Actions.saveNewReview(reviewData);}, 1);
	},

	getReviews: function() {
		var data = getReviewData();
		setTimeout(function(){Actions.setReviews(data)}, 1);
		return true;
	},

	
	getReview: function(reviewId) {
		var data = getReviewData();
		var found = false;
		for(reviewData in data){
			if(data[reviewData].id == reviewId){
				found = true;
				var otherData = data[reviewData];
				setTimeout(function(){Actions.setCurrentReview(otherData)}, 1);		
			}
		}
		if(!found){
			setTimeout(function(){ Actions.setMessage(MessageCodeConstants.REVIEW_NOT_FOUND, "Failed to retrieve review. Please check the url and try again", MessageTypeConstants.FAILURE ); }, 1);
		}
		return true;
	},

	saveReview: function(reviewData){
		var data = getReviewData();
		reviewData.id = data.length + 1;
		data.push(reviewData);
		localStorage.setItem('review', JSON.stringify(data));
	}
};