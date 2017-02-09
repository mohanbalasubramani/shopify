app.controller('cameraController', ['$scope', '$resource', function($scope, $resource) {

    $scope.dataAPI = $resource('data/camera.json');
    $scope.data = $scope.dataAPI.query(function() {
        $scope.data = $scope.data[0];
    });
}]);
