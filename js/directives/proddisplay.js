app.directive("proddisplay", function() {
    return {
        templateUrl: 'templates/proddisplay.html',

            controller: function($scope,$rootScope) {
            $scope.addTocart = function(products) {
                $rootScope.$emit('cartitemadded',products);
            }

            
        }
    }
});
