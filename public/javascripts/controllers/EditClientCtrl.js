'use strict';
wfms.controller("EditClientCtrl", function($scope, $modalInstance,
		 isEdit, $rootScope, DataService,$http) {

	
	
	console.log("isEdit"+ isEdit);

	if (isEdit) {
		console.log("isEdit for the idperson: "+isEdit.idperson);
		//$scope.idperson = isEdit.idperson;
		$scope.firstname =isEdit.fname;
		$scope.lastname =isEdit.lname;
		$scope.start_date=isEdit.start_date;
		$scope.end_date = isEdit.end_date;
		$scope.address = isEdit.address;
		$scope.city=isEdit.city;
		$scope.zipcode=isEdit.zipcode;
		$scope.email=isEdit.email;
		$scope.phonenumber=isEdit.phonenumber;
		
	} else {
		$scope.firstname ="";
		$scope.lastname = "";
		$scope.start_date="";
		$scope.end_date = "";
		$scope.address = "";
		$scope.city="",
		$scope.zipcode="",
		$scope.email="",
		$scope.phonenumber=""
	};
	
	
	
	$scope.open = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();

	    $scope.opened = true;
	  };
	  
	 

$scope.okay = function() {
	if($scope.firstname &&
	$scope.lastname &&
	$scope.start_date &&
	$scope.end_date &&
	$scope.address &&
	$scope.city &&
	$scope.zipcode &&
	$scope.email &&
	$scope.phonenumber){
	
		if (isEdit) {
			console.log(isEdit);

			
			var paramsPerson = {
					fname: $scope.firstname,
					lname: $scope.lastname,
					address: $scope.address,
					city:  $scope.city,
					zipcode: $scope.zipcode,
					email: $scope.email,
					state : $scope.state,
					phonenumber: $scope.phonenumber,
			  		idperson: $rootScope.idperson
						
				};
			DataService.putData("/api/editPerson",paramsPerson).success(
				function(response) {
					console.log("Login Successful");

					var params = {
					idperson: $rootScope.idperson,
					start_date:$scope.start_date,
					end_date : $scope.end_date
					};

					DataService.putData('api/updateClient', params)
					.success(function(response) {

						$modalInstance.close(true);
					}).error(function(err) {
						$modalInstance.close(false);
					});
							
						}).error(function(err) {
					console.log("Error while fetching data");
			
			});
			



}
		
		else {

			var params = {
					
					//idclient : $rootScope.userId,
					idclient : 1,
					start_date:$scope.start_date,
					end_date : $scope.end_date,
					buildingname:  $scope.buildingname,
					address : $scope.address,
					no_of_guards: $scope.no_of_guards,
					checkpoint : $scope.checkpoint
						
				};
			DataService.postData("/api/updateClient",params).success(function(response){
				$modalInstance.close(true);
			}).error(function(err){
				$modalInstance.dismiss(false);
			});
		}
	}
	
	else{
		
		$scope.formError = "Form Invalid !!!";
	}

};

$scope.cancel = function() {
	$modalInstance.dismiss(false);
};


});





