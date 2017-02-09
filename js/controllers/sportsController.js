app.controller('sportsController', ['$scope', '$resource', function($scope, $resource) {

    $scope.dataAPI = $resource('data/sports.json');
    $scope.data = $scope.dataAPI.query(function() {
        $scope.data = $scope.data[0];
    });
}]);
