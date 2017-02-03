var app = angular.module("myShop", ['slick', 'ngRoute', 'ngResource']);

app.run(function($rootScope){
	$rootScope.breakpoints = [{
        breakpoint: 960,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 769,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }];
});


/*Modal cart details*/
app.directive("modalcartdetails", function() {
    return {
        templateUrl: 'templates/modalcartdetails.html',
        controller: function($scope, $rootScope) {
            $scope.cardhistory = [];
            $rootScope.$on('cartitemadded', function(event, data) {
                // console.log(event);
                // console.log(data);
                $scope.cardhistory.push(data);
                $rootScope.totalitems = $scope.cardhistory.length;
            });
            $scope.removeitem = function($index) {
                $scope.cardhistory.splice($index, 1);
                $rootScope.totalitems = $scope.cardhistory.length;
            }
            $scope.getTotal = function() {
                var total = 0;
                angular.forEach($scope.cardhistory, function(value) {
                    total = total + parseInt(value.prod_price);
                });
                return total;
            };

        }

    }

});





$(function() {
    var shrinkHeader = 10;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.maincontainer').addClass('shrink');
            $('.header-links').hide();
        } else {
            $('.maincontainer').removeClass('shrink');
            $('.header-links').show();
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});
