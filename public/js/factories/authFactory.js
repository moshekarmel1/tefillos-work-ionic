var app = angular.module('tehillim');
app.factory('auth', ['$http', '$window', function($http, $window){
    var auth = {};
    //save jwt token in local storage
    auth.saveToken = function (token){
        $window.localStorage['tehillim-token'] = token;
    };
    //get jwt token from local storage
    auth.getToken = function (){
        return $window.localStorage['tehillim-token'];
    }
    //is the user logged in?
    auth.isLoggedIn = function(){
        var token = auth.getToken();
        if(token){
            var payload = JSON.parse($window.atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    };
    //get current user
    auth.currentUser = function(){
        if(auth.isLoggedIn()){
            var token = auth.getToken();
            var payload = JSON.parse($window.atob(token.split('.')[1]));
            return payload.username;
        }
    };
    //register route
    auth.register = function(user){
        return $http.post('/register', user).success(function(data){
            auth.saveToken(data.token);
        });
    };
    //login route
    auth.logIn = function(user){
        return $http.post('/login', user).success(function(data){
            auth.saveToken(data.token);
        });
    };

    auth.logOut = function(){
        $window.localStorage.removeItem('tehillim-token');
    };

    return auth;
}]);
