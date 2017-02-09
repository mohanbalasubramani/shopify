app.controller('tvController', ['$scope', '$resource', function($scope, $resource) {

    $scope.dataAPI = $resource('data/tv.json');
    $scope.data = $scope.dataAPI.query(function() {
        $scope.data = $scope.data[0];
    });
}]);
