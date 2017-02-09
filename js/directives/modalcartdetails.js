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
