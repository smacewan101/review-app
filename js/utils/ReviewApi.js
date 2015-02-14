module.exports = {
  // Load mock product data from localStorage into ProductStore via Action
  getReviewData: function() {
    var data = JSON.parse(localStorage.getItem('review'));
    return data;
  }
};