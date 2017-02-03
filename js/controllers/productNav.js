
app.controller("productNav",['$scope','$rootScope',function($scope,$rootScope){
/*product category*/
	$scope.productCategory = [
		{
			title: 'Offers Zone',
			url: '#/home'
		},
		{
			title: 'Mobile',
			url: '#/mobilezone'
		},
		{
			title: 'TV',
			url: '#/tvzone'
		},
		{
			title: 'Washing Machine',
			url: '#/washingmachinezone'
		},
		{
			title: 'Camera',
			url: '#/camerazone'
		},
		{
			title: 'Laptops',
			url: '#/latopszone'
		},
		{
			title: 'Refrigerators',
			url: '#/refrigeratorszone'
		},
		{
			title: 'Sports',
			url: '#/sportszone'
		},
		{
			title: 'Accessories',
			url: '#/accessorieszone'
		},
		{
			title: 'Baby & Kids',
			url: '#/kidszone'
		},
	]  
}]);
