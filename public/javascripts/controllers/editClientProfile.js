'use strict';
wfms.controller("EditClientProfileCtrl", function($scope, $modalInstance,
		 isEdit, $rootScope, DataService) {

	
	
	console.log("isEdit"+ isEdit);

	
		console.log(isEdit.fname);
		$scope.firstName = isEdit.fname;
		$scope.lastName = isEdit.lname;
		$scope.email = isEdit.email;
		$scope.phonenumber = isEdit.phonenumber;
		$scope.address = isEdit.address;
		$scope.city = isEdit.city;
		$scope.ZipCode=isEdit.zipcode

	
	
	$scope.open = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();

	    $scope.opened = true;
	  };
	  
	  


$scope.okay = function() {
	if($scope.firstName &&
	$scope.lastName &&
	$scope.email &&
	$scope.phonenumber&&
	$scope.address &&
	$scope.city &&
	$scope.ZipCode){
	
		

			var params = {
					idclient : 1,
					firstName:isEdit.idbuilding,
					lastName :isEdit.idbuilding,
					email :isEdit.idbuilding,
					phonenumber:isEdit.idbuilding,
					address :isEdit.idbuilding,
					city :isEdit.idbuilding,
					ZipCode:isEdit.idbuilding
				
			};
			
			
			DataService.putData('/api/editClient', params)
			.success(function(response) {
				$modalInstance.close(true);
			}).error(function(err) {
				$modalInstance.close(false);
			});

}
		
		
	
	else{
		
		$scope.formError = "Form Invalid !!!";
	}

};

$scope.cancel = function() {
	$modalInstance.dismiss(false);
};


});





