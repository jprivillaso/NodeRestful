app.controller("UserController", ['$scope', 'userService', function($scope, userService){
    userService.success(function(data){
        $scope.users = data;
    });
}]);