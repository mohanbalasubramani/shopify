app.controller('fridgeController', ['$scope', '$resource', function($scope, $resource) {

    $scope.dataAPI = $resource('data/fridge.json');
    $scope.data = $scope.dataAPI.query(function() {
        $scope.data = $scope.data[0];
    });
}]);
