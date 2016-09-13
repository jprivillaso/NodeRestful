app.controller("HomeController", ['$scope', function($scope){

  $scope.title = "Hello There you";

	$scope.selected = 'Male';

	$scope.changeGender = function() {
		console.log("changed gender")
	};

}]);
