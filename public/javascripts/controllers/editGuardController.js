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
	
	//ZipCode Validation

	function isValidPostalCode(postalCode) {
	        var postalCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;
	        return postalCodeRegex.test(postalCode);
	}
	function isSSN(ssn) 
	{
	        var ssnRegex =  /^(?!000)(?!666)(?!9)\d{3}[- ]?(?!00)\d{2}[- ]?(?!0000)\d{4}$/;
	        return ssnRegex.test(ssn);
	}
	function isValidPhone(phone)
	{
		var phoneRegex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
		return phoneRegex.test(phone);
	}
	function isValidateEmail(email) {
	    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	    return re.test(email);
	}


	$scope.okay = function() {

	if(!(isValidPostalCode($scope.zipcode))){
		console.log("inside invalid zip");
		$scope.formError = "Invalid Zipcode !!!";
	}
  /* else if(!(isValidPhone($scope.phone)))
	   {
	   $scope.formError = "Invalid Phone Number!!!";
	   }*/
   else if(!(isValidateEmail($scope.email)))
	   {
	   $scope.formError = "Invalid Email-Id!!!";
	   }
	else if(!(isSSN($scope.idguard))){
		console.log("Invalid SSN Format "+$scope.idguard);
		$scope.formError = "Invalid SSN Format !!!";
	}
	else
	{
		if(($scope.idguard =="" || $scope.firstname =="" || $scope.lastname =="" || $scope.address.formatted_address =="" || $scope.city =="" || $scope.zipcode=="" || $scope.email=="" ||  $scope.number=="" ||  $scope.password=="" || $scope.state=="")){			
			$scope.formError = "Invalid Data !!!";
		}
		else
		{
				if($scope.start_date && $scope.end_date && $scope.idguard && 
					$scope.fname && $scope.lname && $scope.bgstatus && $scope.weekly_working_set &&
					$scope.address && $scope.state && $scope.city && $scope.zipcode &&
					$scope.email && $scope.phonenumber){
					
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
				
				$scope.formError = "Required field missing";
			}
		}
	}
	

};

$scope.cancel = function() {
	$modalInstance.dismiss(false);
};

});





