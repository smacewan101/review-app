var Actions = require('../actions/Actions');
var FailureConstants = require('../constants/FailureConstants');

function authenticate(correctPassword, password) {
	return (correctPassword == password);
}

module.exports = {

	loginUser: function(email, password){
		var userData = this.getUserData(email, password);
		if(authenticate(userData.password, password)){
			setTimeout(function(){Actions.loginSucess(userData)}, 1);
		}else{
			setTimeout(function(){ Actions.setFailure(FailureConstants.LOGIN_FAILED, "Failed to authenticate, either your email or password is incorrect") }, 1);
		}
		return true
	},
 	
 	// Load mock product data from localStorage into ProductStore via Action
	getUserData: function() {
		var data = JSON.parse(localStorage.getItem('user'));
		return data;
	},

	getUserData: function(email, password) {
		var data = JSON.parse(localStorage.getItem('user')),
			user = {};

		for(var i = 0; i < data.length; i++){
			var userData = data[i];
			if(userData.email == email){
				user = userData;
				break;
			}
		}

		if(user.id == null){
			user.id = data.length + 1;
			user.email = email;
			user.password = password;
			data.push(user);
			localStorage.setItem('user', JSON.stringify(data));
		}
		return user;
	}
};