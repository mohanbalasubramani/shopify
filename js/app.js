var app = angular.module("myShop", ['slick', 'ngRoute', 'ngResource']);
/*
app.run(function($rootScope){
	$rootScope.breakpoints = [{
        breakpoint: 960,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
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
*/

app.run(function($rootScope){
 $rootScope.slickConfig3Loaded = true;
 $rootScope.slickConfig3 = { 
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
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
