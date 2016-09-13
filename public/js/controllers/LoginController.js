app.controller("LoginController", ['$scope', '$location', '$http', function($scope, $location, $http){

  const BASE_URL = 'http://localhost:3000/';

  $scope.go = function ( path ) {

    var data = {
      username: $scope.username,
      password: $scope.password
    };

    $http.post(BASE_URL + "api/core/auth", data).success(function(data){

      if (data.success && data.token) {
        $location.path( path );
        sessionStorage.setItem("restApiToken", data.token);
      }

    }).error(function(err){
      console.log("error");
      console.log(err);
    });

  };

}]);
