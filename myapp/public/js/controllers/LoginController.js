app.controller("LoginController", ['$scope', '$location', '$http', function($scope, $location, $http){
    $scope.go = function ( path ) {

      var data = {
        username: $scope.username,
        password: $scope.password
      };

      $http.post("http://localhost:3000/api/core/auth", data).success(function(data){

        if (data.success && data.token) {
          $location.path( path );
          console.log("Authenticated successfully");
        }

      }).error(function(err){
        console.log("error");
        console.log(err);
      });

    };

}]);