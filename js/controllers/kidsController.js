app.controller('kidsController', ['$scope', '$resource', function($scope, $resource) {

    $scope.dataAPI = $resource('data/kids.json');
    $scope.data = $scope.dataAPI.query(function() {
        $scope.data = $scope.data[0];
    });
}]);
