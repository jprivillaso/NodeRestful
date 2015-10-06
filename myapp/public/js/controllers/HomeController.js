app.controller("HomeController", ['$scope', function($scope){

    $scope.title = "Hello There you";
	$scope.genderList = [{
	  id: 1,
	  label: 'Male'
	}, {
	  id: 2,
	  label: 'Female'
	}];

	$scope.selected = 'Male';

	$scope.changeGender = function() {
		alert("uhu");
	};

}]);