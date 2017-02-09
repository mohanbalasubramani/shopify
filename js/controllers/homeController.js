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
 //console.log($scope.slickConfig3);

 // $scope.slickConfig3Loaded = true;
 // $scope.slickConfig3 = { 
 //      dots: true,
 //      infinite: false,
 //      speed: 300,
 //      slidesToShow: 4,
 //      slidesToScroll: 4,
 //      responsive: [
 //        {
 //          breakpoint: 1024,
 //          settings: {
 //            slidesToShow: 3,
 //            slidesToScroll: 3,
 //            infinite: true,
 //            dots: true
 //          }
 //        },
 //        {
 //          breakpoint: 600,
 //          settings: {
 //            slidesToShow: 2,
 //            slidesToScroll: 2
 //          }
 //        },
 //        {
 //          breakpoint: 480,
 //          settings: {
 //            slidesToShow: 1,
 //            slidesToScroll: 1
 //          }
 //        }
 //      ]
 //    };



     console.log($scope.slickConfig3);
}]);
