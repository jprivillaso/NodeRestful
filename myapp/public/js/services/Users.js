app.factory("getUsers", ['$http', function($http){
    return $http.get("http://localhost:3000/users/userList")
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });
}]);