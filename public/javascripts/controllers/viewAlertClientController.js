'use strict';
wfms.controller("viewAlertClientController", function($scope, $rootScope,
		$location, $window, DataService) {

	$scope.getAlert = function(){
		DataService.getData("/api/alertPerClient/1", []).success(
				function(response) {
					angular.toJson(response);
					$scope.alert = response.resultAlert;				
				}).error(function(err) {
			console.log("Error while fetching data");
		});
	};


	

	 $scope.severityOnSelect = function ($item, $model, $label) {
     
                $scope.$selection_made = $item;
                console.log("Selection Made: "+$scope.$selection_made.severity);



  //               DataService.getData("/api/alertByidalertInfo/"+$scope.$selection_made.idalertInfo, []).success(
		// 		function(response) {
		// 			angular.toJson(response);
		// 			$scope.alert = response.resultAlert;	
		// 			//this.getAlert();		
		// 		}).error(function(err) {
		// 	console.log("Error while fetching data");
		// });
     };

	


	$scope.seen = function(alertinfo){
		console.log(angular.isObject(alertinfo));
		angular.toJson(alertinfo);
		console.log(alertinfo.data.idalertInfo);
		console.log("Id Alert: "+ alertinfo);
		var params = {
				idalertInfo : alertinfo.data.idalertInfo,
				seenByClient : 'T'
				
			};

		DataService.putData("/api/alert/seenByClient",params).success(function(response){
				console.log("Done Successfully");


			}).error(function(err){
				console.log("Error");
			});
			this.getAlert();
		
	}
});