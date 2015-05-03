'use strict';
wfms.controller("EditClientProfileCtrl", function($scope, $modalInstance,
		isEdit, $rootScope, DataService) {

	console.log("isEdit" + isEdit);

	console.log(isEdit.fname);
	$scope.firstName = isEdit.fname;
	$scope.lastName = isEdit.lname;
	$scope.email = isEdit.email;
	$scope.phonenumber = isEdit.phonenumber;
	$scope.address = isEdit.address;
	$scope.city = isEdit.city;
	$scope.ZipCode = isEdit.zipcode;
	$scope.start_date = isEdit.start_date;
	$scope.end_date = isEdit.end_date;

	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	};

	$scope.okay = function() {
		if ($scope.firstName && $scope.lastName && $scope.email
				&& $scope.phonenumber && $scope.address && $scope.city
				&& $scope.ZipCode && $scope.start_date && $scope.end_date) {

			var paramsPerson = {
				idperson : 7,
				fname : $scope.firstName,
				lname : $scope.lastName,
				address : $scope.address,
				city : $scope.city,
				zipcode : $scope.ZipCode,
				email : $scope.email,
				phonenumber : $scope.phonenumber,
				//idperson : $scope.idperson
			};
			DataService.putData("/api/editPerson", paramsPerson).success(
					function(response) {
						console.log("Editted Successfully");

						var params = {
								idperson : 7,
							//idperson : $scope.idperson,
							start_date : $scope.start_date,
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

			DataService.putData('/api/editClient', params).success(
					function(response) {
						$modalInstance.close(true);
					}).error(function(err) {
				$modalInstance.close(false);
			});

		}

		else {

			$scope.formError = "Form Invalid !!!";
		}

	};

	$scope.cancel = function() {
		$modalInstance.dismiss(false);
	};

});
