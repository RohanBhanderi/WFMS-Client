'use strict';
wfms.controller("mapCntr", function($scope, $rootScope,  
		$location, DataService)  {
$scope.map = { center: { latitude: 37.335847,  longitude: -121.886403 }, zoom: 8 };

$scope.getBuilding = function(){

		console.log("idclient: "+$rootScope.idclient);

		DataService.getData("/api/getBuildingClientReport/"+$rootScope.idclient, []).success(
				function(response) {
					$scope.data = response.data;
          console.log($scope.result);
				}).error(function(err) {
			console.log("Error while updating client billing information");
		});
};

$scope.marker = {
      id: 0,
      coords: {
        latitude: 37.335847,
        longitude: -121.886403
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);


          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }

		//getMap();

		
	}

	// function getMap(){
		
	// 	$location.path('/client/map');
		

	// }
});
