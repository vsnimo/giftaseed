var demoapp =  angular.module('demoapp',['ngRoute','seller',"xeditable"]);

demoapp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/demoapp',{
		templateUrl: 'src/demoapp/demoapp.html',
        controller: 'demoController'
		
	}).otherwise({ redirectTo: '/demoapp' });
}]);

demoapp.controller('demoController',function($scope){
	//controller code here...

	/*$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});*/

	
});