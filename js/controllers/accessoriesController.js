app.controller('accessoriesController', ['$scope', '$resource', function($scope, $resource) {

    $scope.dataAPI = $resource('data/accessories.json');
    $scope.data = $scope.dataAPI.query(function() {
        $scope.data = $scope.data[0];
    });
}]);
