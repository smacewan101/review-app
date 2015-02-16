var $ = require('jquery');

module.exports = {

	postReview: function(reviewData){
		console.log(reviewData);
		$.ajax({
			url: "",
			type: "post",
			data: reviewData,
			success: function(returnData){
				console.log(returnData);
			},
			error: function(){
				console.log("failed");
			}
		});
	},

	// Load mock product data from localStorage into ProductStore via Action
	getReviewData: function() {
		var data = JSON.parse(localStorage.getItem('review'));
		return data;
	}
};