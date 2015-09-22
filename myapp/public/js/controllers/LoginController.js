app.controller("LoginController", ['$scope', '$location', function($scope, $location){
    $scope.go = function ( path ) {
        $location.path( path );
    };
}]);