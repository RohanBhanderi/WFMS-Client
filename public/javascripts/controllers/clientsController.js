'use strict';
wfms.controller("ClientsCtrl", function($scope, $rootScope, DataService) {

	$scope.getAllClients = function(){
		DataService.getData(urlConstants.GET_ALL_CLIENTS,[]).success(function(response){
			if(response.data){
				console.log(response.data);
				$scope.clientListResults = response.data;

		var params = {
			//idclient : $rootScope.idclient;
			idclient : 1
		};

		DataService.postData("/api/updateClientBillingInfo", params).success(
				function(response) {
					$scope.billingInfo = response.result;
				}).error(function(err) {
			console.log("Error while updating client billing information");
		});

	}
			
		}).error(function(err){
			console.log(err.message);
		});
	
	}


}).filter('sumByKey', function () {
    return function (data, key) {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined') {
            return 0;
        }
        console.log("key:"+key);
        console.log("Data:"+data[0].Amount_Due);

        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--) {
            sum += parseInt(data[i][key]);
        }
        console.log("Sum:"+sum);
        
        return sum;
    };
});
