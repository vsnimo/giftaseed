var seller =  angular.module('seller',['ngRoute','xeditable']);

seller.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/sellerregistration',{
		templateUrl: 'src/seller/seller-registration.html',
        controller: 'sellerController'
		
	}).when('/sellereditproducts',{
		templateUrl: 'src/seller/seller-edit-products.html',
        controller: 'sellerController'
		
	});
}]);

seller.controller('sellerController',function($scope, $filter, $http,sellerService){
	
	$scope.product={};

	$scope.sellerproducts = [];
	
    /*{id: 1, name: 'Cabbage', quantity: 100, price: 20, district: 'Idukki'},
    {id: 2, name: 'Grape', quantity: 50, price: 55, district: 'Kottayam'},
    {id: 3, name: 'Pumpkin', quantity:  60, price: 10, district: 'Idukki'},
    {id: 4, name: 'Cauliflower', quantity: 35, price: 25, district: 'Kollam'},

  ]; */

  $scope.loadSellerProducts = function() {
    sellerService.getSellerProducts()
        .success(function(data) {
            console.log(data);
            $scope.sellerproducts = data.results;
            for (i = 0; i <data.results.length; i++) { 
			    console.log(data.results[i].name);
			}
        }).error(function(data) {
            alert("Error");
        })
  };

  $scope.loadDistricts = function() {
    //return $scope.groups.length ? null : $http.get('/groups').success(function(data) {
      $scope.districts = [

      	{ id:1,name:'Alappuzha'},
      	{ id:2,name:'Ernakulam'},
      	{ id:3,name:'Idukki'},
      ];
  };

  $scope.checkProductName = function(data) {
    if (data === null) {
      return "Please enter a product name";
    }
  };

  $scope.saveProduct = function(data, id) {
    //$scope.user not updated yet
    //angular.extend(data, {id: id});
    //return $http.post('/saveUser', data);
  };

  // remove user
  $scope.removeProduct = function(index) {
    $scope.sellerproducts.splice(index, 1);
  };

  // add user
  $scope.addProduct = function() {
    $scope.inserted = {
      id: $scope.sellerproducts.length+1,
      name: '',
      quantity: null,
      price: null,
      district: null 
    };
    $scope.sellerproducts.push($scope.inserted);
  };


});
