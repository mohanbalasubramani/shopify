app.controller('homeController', ['$scope', '$resource', function($scope, $resource) {

    $scope.dataAPI = $resource('data/home.json');
    $scope.data = $scope.dataAPI.query(function() {
        $scope.data = $scope.data[0];
    });
    // $scope.breakpoints = [{
    //     breakpoint: 960,
    //     settings: {
    //         slidesToShow: 4,
    //         slidesToScroll: 2
    //     }
    // }, {
    //     breakpoint: 769,
    //     settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1
    //     }
    // }, {
    //     breakpoint: 480,
    //     settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //     }
    // }];
 console.log($scope.breakpoints);
}]);
