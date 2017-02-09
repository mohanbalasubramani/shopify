app.controller('laptopController', ['$scope', '$resource', function($scope, $resource) {

    $scope.dataAPI = $resource('data/laptops.json');
    $scope.data = $scope.dataAPI.query(function() {
        $scope.data = $scope.data[0];
    });
}]);
