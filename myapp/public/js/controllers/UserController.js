app.controller("UserController", ['$scope', 'getUsers', function($scope, getUsers){
    getUsers.success(function(data){
        $scope.users = data;
    });
}]);