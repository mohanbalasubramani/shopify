app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })
        .when('/mobilezone', {
            templateUrl: 'templates/mobilezone.html',
            controller: 'mobileController'
        })
        .when('/tvzone', {
            templateUrl: 'templates/tvzone.html',
            controller: 'tvController'
        })
        .when('/washingmachinezone', {
            templateUrl: 'templates/washingmachinezone.html',
            controller: 'washingController'
        })
        .when('/camerazone', {
            templateUrl: 'templates/camerazone.html',
            controller: 'cameraController'
        })
        .when('/latopszone', {
            templateUrl: 'templates/latopszone.html',
            controller: 'laptopController'
        })
        .when('/refrigeratorszone', {
            templateUrl: 'templates/refrigeratorszone.html',
            controller: 'fridgeController'
        })
        .when('/sportszone', {
            templateUrl: 'templates/sportszone.html',
            controller: 'sportsController'

        })
        .when('/accessorieszone', {
            templateUrl: 'templates/accessorieszone.html',
            controller: 'accessoriesController'
        })
        .when('/kidszone', {
            templateUrl: 'templates/kidszone.html',
            controller: 'kidsController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
