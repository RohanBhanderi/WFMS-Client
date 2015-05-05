'use strict';
wfms.controller("ShowGuardController", function($scope, $rootScope, $modal,
		$location, DataService,$window) {
	
	$scope.loginGuard = function() {

		console.log("Inside login guard Funct");
		if($scope.email=== "" ||  $scope.password === ""){
			$scope.formError = "Form Invalid !!!";
		}else{
			
			var params = {
					
					email : $scope.email,
					password:  $scope.password
						
				};
			DataService.postData("/api/login",params).success(
				function(response) {

					$window.sessionStorage.idguard = response.idguard;
					$window.sessionStorage.idperson = response.idperson;
					$window.sessionStorage.fname = response.fname;
					$window.sessionStorage.lname = response.lname;
					$window.sessionStorage.email = response.email;
					$window.sessionStorage.lastLogin = response.lastLogin;
					
					$rootScope.lastLogin = $window.sessionStorage.lastLogin;
					$rootScope.idguard = $window.sessionStorage.idguard;
					$rootScope.idperson = $window.sessionStorage.idperson;
					$rootScope.fname = $window.sessionStorage.fname;
					$rootScope.fname = $window.sessionStorage.fname;
					$rootScope.email = $window.sessionStorage.email;

					$location.path('/guard');
				}).error(function(err) {
			console.log("Error while fetching data");
			$location.path('/');
		});
		}
	};
	
	
	
});
	
	