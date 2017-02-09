app.controller('washingController', ['$scope', '$resource', function($scope, $resource) {

    $scope.dataAPI = $resource('data/wm.json');
    $scope.data = $scope.dataAPI.query(function() {
        $scope.data = $scope.data[0];
    });
}]);
