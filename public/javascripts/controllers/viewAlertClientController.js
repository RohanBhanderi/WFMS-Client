'use strict';
wfms.controller("viewAlertClientController", function($scope, $rootScope, $filter, 
		$location, $window, DataService, ngTableParams)  {

	var data = [];
	$scope.getAlert = function(){
		DataService.getData("/api/alertPerClient/1", []).success(
				function(response) {
					angular.toJson(response);
					$scope.alert = response.resultAlert;	
					data = response.resultAlert;			
				}).error(function(err) {
			console.log("Error while fetching data");
		});
	};
	

	$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,
        filter: {
            severity: '',
            description: ''      // initial filter
        }        
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
 		// total: data.length, // length of data
   //      getData: function($defer, params) {
   //          $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        
        }
    });
	

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