'use strict';
wfms.controller("ShowAdminController", function($scope, $rootScope, $modal,
		$location, DataService,$window) {
	
	$scope.loginAdmin = function() {

		console.log("Inside login admin Funct");
		if($scope.email=== "" ||  $scope.password === ""){
			$scope.formError = "Form Invalid !!!";
		}else{
			
			var params = {
					
					email : $scope.email,
					password:  $scope.password
						
				};
			DataService.postData("/api/login",params).success(
				function(response) {
					$rootScope.fname = response.fname;
					$rootScope.lname = response.lname;
					$rootScope.idperson = response.idperson;
					$rootScope.email = response.email;
					$rootScope.lastLogin = response.lastLogin;
					$location.path('/admin');
				}).error(function(err) {
			console.log("Error while fetching data");
			$location.path('/');
		});
		}
	};
	
	
	
});
	
	