app.controller('mobileController',['$scope','$resource', function($scope,$resource){
	$scope.dataAPI=$resource('data/mobile.json');
	$scope.data=$scope.dataAPI.query(function(){
		$scope.data=$scope.data[0];
	});

}]);