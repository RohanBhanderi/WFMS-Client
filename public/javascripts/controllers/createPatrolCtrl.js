'use strict';
<<<<<<< HEAD
wfms.controller("CreatePatrolCtrl", function($scope, $rootScope, DataService, $window, $location) {
=======
wfms.controller("CreatePatrolCtrl", function($scope, $rootScope, DataService,$window) {
>>>>>>> 1c1915247e2e3ce0b714e05f58593233775ddf45
	
$scope.getGuardBuilding=function(){
		
		console.log("guard Building");
		var idguard=$window.sessionStorage.idguard;
		var uri = urlConstants.GET_GUARD_BUILDING+idguard;
		DataService.getData(uri,[]).success(function(response){
			angular.toJson(response);
			console.log("in controller"+response.data);
		//	console.log("Guard Info"+response);
			$scope.guardSchedule = response.data;
			$scope.val="Hello";
		}).error(function(err){
			console.log(err.message);
		});
	};
	
$scope.createPatrol = function() {
if(!($scope.desc || $scope.idbuilding || $scope.patrol_date ||  $scope.time)){
		console.log("Form Invalid-Alert");
		$scope.formError = "Form Invalid !!!";
	}
	else {
		console.log("hello from create Patrol");
		var params = {
				
				  idbuilding : $scope.idbuilding,
					date : $scope.patrol_date,
					idguard : "1",
					description : $scope.desc,
					time : $scope.time,
					
			
			};
		
		DataService.postData(urlConstants.ADD_PATROL,params).success(function(response){
			
			alert("Patrol Details Succesfully Inserted");
			$location.path('/');
		}).error(function(err){
			console.log(err.message);
		});
			
			
	}
		

	
};
});
