app.controller("LoginController", ['$scope', '$location', '$http', function($scope, $location, $http){
    $scope.go = function ( path ) {

      var data = {
        user: "juan",
        password: "123"
      };

      $http.post("http://localhost:3000/auth/authenticate", data).done(function(data){
        $location.path( path );
      }).error(function(err){
        console.log(err);
      });

    };
}]);