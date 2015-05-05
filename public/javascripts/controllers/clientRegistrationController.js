'use strict';
wfms.controller("ClientRegistrationController", function($scope, $modalInstance,$rootScope,DataService,$window) {

	console.log("M I in this!");
	
	$scope.open = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();

	    $scope.opened = true;
	  };

$scope.register = function() {

/*
    $scope.zipCodeRegex = "/^\d{5}(?:[-\s]\d{4})?$/";
    $scope.ssnRegex = "/^(?!000)(?!666)(?!9)\d{3}[- ]?(?!00)\d{2}[- ]?(?!0000)\d{4}$/";
*/

    
	console.log("Inside register Funct"+$scope.firstname);
	console.log($scope.ssn + $scope.firstname + $scope.lastname + $scope.address + $scope.city + $scope.zipcode + $scope.email + $scope.number +  $scope.password);
	if($scope.firstname=="")
		{
		$scope.formError = "Form Invalid - Firstname only !!!";
		}
/*	if(!($scope.ssn || $scope.firstname || $scope.lastname || $scope.address || $scope.city || $scope.zipcode || $scope.email ||  $scope.number ||  $scope.password)){
		
		
		//$scope.formError = "Form Invalid !!!";
	}*/else{
		
		var params = {
				
				fname : $scope.firstname,
				lname:  $scope.lastname,
				address : $scope.address,
				city : $scope.city,
				zipcode : $scope.zipcode,
				email : $scope.email,
				phonenumber : $scope.number,
				password : $scope.password,
				ssn : $scope.ssn,
				usertype: "CLNT"
					
			};
			console.log("Params value:" + JSON.stringify(params));
		DataService.postData("/api/register",params).success(function(response){
			$modalInstance.close(true);
		}).error(function(err){
			$modalInstance.dismiss(false);
		});
	}
};

$scope.cancel = function() {
	$modalInstance.dismiss(false);
};
});

