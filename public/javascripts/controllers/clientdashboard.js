'use strict';
wfms.controller("ClientDashboard", function($scope, $rootScope, $modal,
		$location, DataService, $window) {

	$scope.getData = function() {
		
		clientInfo();
		
	}
	


	
	
	function clientInfo(){

	
<<<<<<< HEAD
		//console.log("$rootScope.idclient" + $rootScope.idclient)
		var uri = "/api/getClientInfo/"+$rootScope.idperson;
		DataService.getData(uri,[]).success(function(response){
=======
		DataService.getData("/api/getClientInfo/" + $window.sessionStorage.idperson,[]).success(function(response){
>>>>>>> 117d74be4717d942426eec293c000f89b0a53779

			
			//angular.toJson(response);
			console.log(response.data[0]);
			$scope.clientProperties = response.data[0];
			
		}).error(function(err){
			console.log(err.message);
		});
	}
	
	
	
	
	$scope.modifyClientInfo = function() {
		console.log("did i get called");

		var modalInstance = $modal.open({
			templateUrl : 'templates/client/editClientInformation.html',
			controller : 'EditClientProfileCtrl',
			size : 'lg',
			resolve : {
				isEdit : function(){
					return $scope.clientProperties;
					//return data;
				}
		
			}
		});

		modalInstance.result.then(function(isValid) {
			if (isValid) {
				clientInfo();
			}
		}, function() {
		});
	};
	
	
});
	

	