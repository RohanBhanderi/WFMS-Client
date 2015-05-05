'use strict';
wfms.controller("EditClientProfileCtrl", function($scope, $modalInstance,

		isEdit, $rootScope, DataService) {
	
	//ZipCode Validation
	function isValidPostalCode(postalCode) {
        var postalCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;
        return postalCodeRegex.test(postalCode);
}

	
	function isSSN(ssn) {
        var ssnRegex =  /^(?!000)(?!666)(?!9)\d{3}[- ]?(?!00)\d{2}[- ]?(?!0000)\d{4}$/;
        return ssnRegex.test(ssn);
}

	

	
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function(val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
        return {
          location: item.geometry.location,
          formatted_address: item.formatted_address
        }
      });
    });
  };
});


