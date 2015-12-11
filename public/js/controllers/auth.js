var app = angular.module('tehillim');
app.controller('AuthCtrl', ['$scope', '$state', 'auth', function($scope, $state, auth){
    $scope.user = {};

    $scope.register = function(){
        auth.register($scope.user).error(function(error){
            $scope.error = error;
            error.class = 'error';
        }).then(function(){
            $scope.error = {
                class: 'success',
                message: 'Success!'
            };
            window.history.back();
            //$state.go('home');
        });
    };

    $scope.logIn = function(){
        auth.logIn($scope.user).error(function(error){
            $scope.error = error;
            error.class = 'error';
        }).then(function(){
            $scope.error = {
                class: 'success',
                message: 'Success!'
            };
            window.history.back();
            //$state.go('home');
        });
    };
}]);
