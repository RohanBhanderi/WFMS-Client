'use strict';
wfms.controller("AdminDashBoard", function($scope, $rootScope, $modal,
		$location, DataService, $window) {

	$scope.getData = function() {
		
		adminInfo();
		
	}
	
	function adminInfo(){
		console.log("$rootScope.idperson:" + $rootScope.idperson);
	//	console.log("$rootScope.idclient:" + $rootScope.idclient);
		var uri = "/api/getPersonInfo/"+$rootScope.idperson;
		//console.log($rootScope.idperson);
		DataService.getData("/api/getPersonInfo/" + $window.sessionStorage.idperson,[]).success(function(response){
	

			
			console.log(angular.toJson(response));
			$scope.adminProperties = response.data[0];
			$scope.lastlogin=$window.sessionStorage.lastLogin
			
		}).error(function(err){
			console.log(err.message);
		});
	};
	
	
	//addAdmin()
	
	
	
	
});
	

	