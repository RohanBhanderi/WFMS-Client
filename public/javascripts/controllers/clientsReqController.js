'use strict';
wfms.controller("ClientsReqCtrl", function($scope, $rootScope, DataService) {

	$scope.getAllPNDGClients = function(){
		DataService.getData(urlConstants.GET_PNDG_CLIENTS,[]).success(function(response){
			if(response.data){
				console.log(response.data);
				$scope.clientReqList = response.data;
			}
		}).error(function(err){
			console.log(err.message);
		});
	}

	$scope.getGuardsToAssign = function(){
		DataService.getData(urlConstants.GET_GUARDS_ASSIGN,[]).success(function(response){
			if(response.data){
				console.log(response.data);
				$scope.guardReqList = response.data;
			}
		}).error(function(err){
			console.log(err.message);
		});
	}


});