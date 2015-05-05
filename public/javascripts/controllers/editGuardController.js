'use strict';
wfms.controller("EditGuardCtrl", function($scope, $modalInstance,
		 isEdit, $rootScope, DataService) {
	
	console.log("isEdit "+isEdit);

	if (isEdit) {
		$scope.fname = isEdit.fname;
		$scope.lname = isEdit.lname;
		$scope.bgstatus = isEdit.bgstatus;
		$scope.weekly_working_set = isEdit.weekly_working_set;
		$scope.start_date = isEdit.start_date;
		$scope.end_date = isEdit.end_date;
		$scope.address = isEdit.address;
		$scope.zipcode = isEdit.zipcode;
		$scope.city = isEdit.city;
		$scope.state = isEdit.state;
		$scope.email = isEdit.email;
		$scope.phonenumber = isEdit.phonenumber;
		
	} else {
		$scope.fname = "";
		$scope.lname = ""
		$scope.bgstatus = "";
		$scope.weekly_working_set = "";
		$scope.start_date = "";
		$scope.end_date = "";
		$scope.address = "";
		$scope.zipcode = "";
		$scope.city = "";
		$scope.state = "";
		$scope.email = "";
		$scope.phonenumber = "";
	};
	
	 
	
	$scope.states= [
	                  { name: 'ALABAMA', abbreviation: 'AL'},
	                  { name: 'ALASKA', abbreviation: 'AK'},
	                  { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
	                  { name: 'ARIZONA', abbreviation: 'AZ'},
	                  { name: 'ARKANSAS', abbreviation: 'AR'},
	                  { name: 'CALIFORNIA', abbreviation: 'CA'},
	                  { name: 'COLORADO', abbreviation: 'CO'},
	                  { name: 'CONNECTICUT', abbreviation: 'CT'},
	                  { name: 'DELAWARE', abbreviation: 'DE'},
	                  { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
	                  { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
	                  { name: 'FLORIDA', abbreviation: 'FL'},
	                  { name: 'GEORGIA', abbreviation: 'GA'},
	                  { name: 'GUAM', abbreviation: 'GU'},
	                  { name: 'HAWAII', abbreviation: 'HI'},
	                  { name: 'IDAHO', abbreviation: 'ID'},
	                  { name: 'ILLINOIS', abbreviation: 'IL'},
	                  { name: 'INDIANA', abbreviation: 'IN'},
	                  { name: 'IOWA', abbreviation: 'IA'},
	                  { name: 'KANSAS', abbreviation: 'KS'},
	                  { name: 'KENTUCKY', abbreviation: 'KY'},
	                  { name: 'LOUISIANA', abbreviation: 'LA'},
	                  { name: 'MAINE', abbreviation: 'ME'},
	                  { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
	                  { name: 'MARYLAND', abbreviation: 'MD'},
	                  { name: 'MASSACHUSETTS', abbreviation: 'MA'},
	                  { name: 'MICHIGAN', abbreviation: 'MI'},
	                  { name: 'MINNESOTA', abbreviation: 'MN'},
	                  { name: 'MISSISSIPPI', abbreviation: 'MS'},
	                  { name: 'MISSOURI', abbreviation: 'MO'},
	                  { name: 'MONTANA', abbreviation: 'MT'},
	                  { name: 'NEBRASKA', abbreviation: 'NE'},
	                  { name: 'NEVADA', abbreviation: 'NV'},
	                  { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
	                  { name: 'NEW JERSEY', abbreviation: 'NJ'},
	                  { name: 'NEW MEXICO', abbreviation: 'NM'},
	                  { name: 'NEW YORK', abbreviation: 'NY'},
	                  { name: 'NORTH CAROLINA', abbreviation: 'NC'},
	                  { name: 'NORTH DAKOTA', abbreviation: 'ND'},
	                  { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
	                  { name: 'OHIO', abbreviation: 'OH'},
	                  { name: 'OKLAHOMA', abbreviation: 'OK'},
	                  { name: 'OREGON', abbreviation: 'OR'},
	                  { name: 'PALAU', abbreviation: 'PW'},
	                  { name: 'PENNSYLVANIA', abbreviation: 'PA'},
	                  { name: 'PUERTO RICO', abbreviation: 'PR'},
	                  { name: 'RHODE ISLAND', abbreviation: 'RI'},
	                  { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
	                  { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
	                  { name: 'TENNESSEE', abbreviation: 'TN'},
	                  { name: 'TEXAS', abbreviation: 'TX'},
	                  { name: 'UTAH', abbreviation: 'UT'},
	                  { name: 'VERMONT', abbreviation: 'VT'},
	                  { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
	                  { name: 'VIRGINIA', abbreviation: 'VA'},
	                  { name: 'WASHINGTON', abbreviation: 'WA'},
	                  { name: 'WEST VIRGINIA', abbreviation: 'WV'},
	                  { name: 'WISCONSIN', abbreviation: 'WI'},
	                  { name: 'WYOMING', abbreviation: 'WY' }
	              ];
	           	
	$scope.open = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();

	    $scope.opened = true;
	  };
	

$scope.okay = function() {
	if($scope.start_date && $scope.end_date){
		
		if (isEdit) {
			console.log(isEdit);

			var params = {
				
				
		    //idclient : $rootScope.userId,
			idperson : isEdit.idperson,
			idguard : $scope.idguard,
			fname : $scope.fname,
			lname : $scope.lname,
			bgstatus : $scope.bgstatus,
			weekly_working_set : $scope.weekly_working_set,
			start_date : $scope.start_date,
			end_date : $scope.end_date,
			address : $scope.address,
			zipcode : $scope.zipcode,
			state : $scope.state,
			city : $scope.city,
			email : $scope.email,
			phonenumber : $scope.phonenumber
				
			};
			
			var uri='/api/updateGuard/'+isEdit.idguard;
			console.log(uri);
			DataService.putData(uri, params)
			.success(function(response) {
				$modalInstance.close(true);
			}).error(function(err) {
				$modalInstance.close(false);
			});

}
		
		
		else {
			var params = {
					
					//idclient : $rootScope.userId,
					//idperson : isEdit.idperson,
					idguard : $scope.idguard,
					fname : $scope.fname,
					lname : $scope.lname,
					bgstatus : $scope.bgstatus,
					weekly_working_set : $scope.weekly_working_set,
					start_date : $scope.start_date,
					end_date : $scope.end_date,
					address : $scope.address,
					zipcode : $scope.zipcode,
					state : $scope.state,
					city : $scope.city,
					email : $scope.email,
					phonenumber : $scope.phonenumber,
					password : $scope.fname+$scope.lname,
					usertype : "Guard"
				};
			DataService.postData("/api/createGuard",params).success(function(response){
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


