'use strict';
wfms.controller("AssignGuardsCtrl", function($scope, $modalInstance,
		 isEdit, $rootScope, DataService) {
	
	console.log("isEdit "+isEdit);
	$scope.selectedGuards = [];
	// if (isEdit) {
	// 	$scope.fname = isEdit.fname;
	// 	$scope.lname = isEdit.lname;
	// 	$scope.bgstatus = isEdit.bgstatus;
	// 	$scope.weekly_working_set = isEdit.weekly_working_set;
	// 	$scope.start_date = isEdit.start_date;
	// 	$scope.end_date = isEdit.end_date;
	// 	$scope.address = isEdit.address;
	// 	$scope.zipcode = isEdit.zipcode;
	// 	$scope.city = isEdit.city;
	// 	$scope.email = isEdit.email;
	// 	$scope.phonenumber = isEdit.phonenumber;
		
	// } else {
	// 	$scope.fname = "";
	// 	$scope.lname = ""
	// 	$scope.bgstatus = "";
	// 	$scope.weekly_working_set = "";
	// 	$scope.start_date = "";
	// 	$scope.end_date = "";
	// 	$scope.address = "";
	// 	$scope.zipcode = "";
	// 	$scope.city = "";
	// 	$scope.email = "";
	// 	$scope.phonenumber = "";
	// };



//Data fetching methods
$scope.getGuardsToAssign = function(){
	DataService.getData(urlConstants.GET_GUARDS_ASSIGN,[]).success(function(response){
		if(response.data){
			//console.log("GET_GUARDS_ASSIGN:" + response.data);
			$scope.guardReqList = response.data;
		}
	}).error(function(err){
		console.log(err.message);
	});
};

// This executes when guard in table is checked
$scope.selectGuard = function (guard) {
	var guardDtls = {
		idguard : guard.idguard,
		idperson : guard.idperson
	};
   	$scope.selectedGuards.push(guardDtls);
};

//$modelInstance methods
$scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
};
	

$scope.okay = function() {

	console.log(JSON.stringify($scope.selectedGuards));
	var params = {
		idperson : isEdit.idperson,
		idclient : isEdit.idclient,
		guardDtls : $scope.selectedGuards
	};

	// if($scope.start_date && $scope.end_date){
		
	// 	if (isEdit) {
	// 		console.log(isEdit);

	// 		var params = {
				
				
	// 				//idclient : $rootScope.userId,
	// 		idperson : isEdit.idperson,
	// 		idguard : $scope.idguard,
	// 		fname : $scope.fname,
	// 		lname : $scope.lname,
	// 		bgstatus : $scope.bgstatus,
	// 		weekly_working_set : $scope.weekly_working_set,
	// 		start_date : $scope.start_date,
	// 		end_date : $scope.end_date,
	// 		address : $scope.address,
	// 		zipcode : $scope.zipcode,
	// 		city : $scope.city,
	// 		email : $scope.email,
	// 		phonenumber : $scope.phonenumber
				
	// 		};
			
	// 		var uri='/api/updateGuard/'+isEdit.idguard;
	// 		console.log(uri);
	// 		DataService.putData(uri, params)
	// 		.success(function(response) {
	// 			$modalInstance.close(true);
	// 		}).error(function(err) {
	// 			$modalInstance.close(false);
	// 		});

	// 	}//isedit
	// 	else {
	// 		var params = {
					
	// 				//idclient : $rootScope.userId,
	// 				//idperson : isEdit.idperson,
	// 				//idguard : $scope.idguard,
	// 				fname : $scope.fname,
	// 				lname : $scope.lname,
	// 				bgstatus : $scope.bgstatus,
	// 				weekly_working_set : $scope.weekly_working_set,
	// 				start_date : $scope.start_date,
	// 				end_date : $scope.end_date,
	// 				address : $scope.address,
	// 				zipcode : $scope.zipcode,
	// 				city : $scope.city,
	// 				email : $scope.email,
	// 				phonenumber : $scope.phonenumber,
	// 				password : $scope.city,
	// 				usertype : "Guard"
	// 			};
	// 		DataService.postData("/api/createGuard",params).success(function(response){
	// 			$modalInstance.close(true);
	// 		}).error(function(err){
	// 			$modalInstance.dismiss(false);
	// 		});
	// 	}
	// }else{// start date end date
		
	// 	$scope.formError = "Form Invalid !!!";
	// }

};

$scope.cancel = function() {
	$modalInstance.dismiss(false);
};

});




