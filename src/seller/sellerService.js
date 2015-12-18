
var sellerService =  angular.module('seller')
	.factory('sellerService',['$http', function($http){
	 var sellerService = {};
	
    	sellerService.getSellerProducts = function (sellerid) {
			var parseUrl="https://api.parse.com/1/classes/sellerproduct";
	       	return $http.get(parseUrl,{
	       		headers: { 
	       			'X-Parse-Application-Id':'6NtSkkQjjGzG55eBE8OpUyhf4F57Y6p99R9WHiZP', 
	       			'X-Parse-REST-API-Key':'X1fhizZM4Y4MQ9b3a47KMDpfRiY2cCiIHHyTSGgN'}
	       	});
       	
    	}

   	return sellerService;

}]);