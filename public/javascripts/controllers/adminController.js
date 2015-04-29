'use strict';
wfms.controller("AdminController", function($scope, $rootScope,
		$location, $window, DataService) {

	$scope.template = "templates/admin/adminhome.html";

	$scope.setTemplate = function(tabName){
		$scope.template = "templates/admin/"+tabName + ".html";
	}

	$scope.getTemplate = function(){
		return $scope.template;
	};

	$scope.getBillingInfo = function(){

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

	};


	
	// $scope.signInFormError = "";

	// $scope.signIn = function() {
	// 	if ($scope.loginForm.email.$invalid || $scope.loginForm.pwd.$invalid) {
	// 		$scope.signInFormError = "Invalid Credentials";
	// 	} else {
	// 		var params = {
	// 			email : $scope.email,
	// 			password : $scope.pwd
	// 		};
	// 		DataService.postData(urlConstants.LOGIN, params).success(
	// 				function(response) {
	// 					*
	// 					 * For encrypting password at client side as well
	// 					 * $scope.pwd =
	// 					 * CryptoJS.SHA256($scope.pwd).toString(CryptoJS.enc.hex);
						 
	// 					$window.sessionStorage.userId = response.email;
	// 					$window.sessionStorage.userName = response.name;
	// 					$window.sessionStorage.userLastLogin = response.lastLogin;
	// 					$rootScope.userId = response.email;
	// 					$rootScope.userName = response.name;
	// 					$rootScope.userLastLogin = response.lastLogin;
	// 					$location.path('/home');
	// 				}).error(function(err) {
	// 			$scope.signInFormError = err.message;
	// 		});
	// 	}
	// }
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