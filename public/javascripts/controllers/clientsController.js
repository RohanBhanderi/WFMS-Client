'use strict';
wfms.controller("ClientsCtrl", function($scope, $rootScope, DataService, $modal) {
	
	function loadclient(){
	DataService.getData(urlConstants.GET_ALL_CLIENTS,[]).success(function(response){
			if(response.data){
				console.log(response.data);
				$scope.clientListResults = response.data;

		var params = {
<<<<<<< HEAD
			idclient : $rootScope.idclient
=======
			idclient : $window.sessionStorage.idclient

>>>>>>> c93fed60e216325b6ff5723e26039f6453c9d560
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

	$scope.getAllClients = function(){
		loadclient()
		
	}

	$scope.modifyClient = function(data) {
		console.log("Client cntr did i get called");

		var modalInstance = $modal.open({
			templateUrl : 'templates/admin/editClient.html',
			controller : 'EditClientCtrl',
			size : 'lg',
			resolve : {
				isEdit : function(){
					return data;
				}
		
			}
		});

		modalInstance.result.then(function(isValid) {
			if (isValid) {
				loadclient();
				
			}
		}, function() {
		});
	};

	$scope.deleteClient = function(client) {
		
		DataService.deleteData('api/deleteClient/'+client.idperson, []).success(function(response){
			alert("Building Deleted Successfully");
			loadclient();
		}).error(function(err){
			
		});
		
	};


}).filter('sumByKey', function () {
    return function (data, key) {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined') {
            return 0;
        }
        // console.log("key:"+key);
        // console.log("Data:"+data[0].Amount_Due);

        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--) {
            sum += parseInt(data[i][key]);
        }
        // console.log("Sum:"+sum);
        
        return sum;
    };
});
