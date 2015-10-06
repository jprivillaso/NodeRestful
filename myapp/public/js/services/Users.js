app.factory("getUsers", ['$http', function($http){
    return $http.get("http://localhost:3000/api/core/users/userList")
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });
}]);