'use strict';
wfms.controller("mapCntr", function($scope, $rootScope, $filter, 
		$location, $window, DataService, ngTableParams)  {

	$scope.redirect = function(){

		alert("In Map");

		$location.path('/client/map');
	}
}
