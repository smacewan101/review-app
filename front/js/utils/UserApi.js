module.exports = {
  // Load mock product data from localStorage into ProductStore via Action
  getUserData: function() {
    var data = JSON.parse(localStorage.getItem('user'));
    return data;
  }
};