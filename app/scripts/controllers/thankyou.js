'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:thankYou
 * @description
 * # thankYou
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('thankYouCtrl', ['$scope', '$location', '$rootScope', '$timeout', function ($scope, $location, $rootScope, $timeout) {
 	
  	$scope.price1 = "999";
  	$scope.price2 = "9999";
	$scope.loaded = false;

  	$scope.showPrice = function(){
  		$timeout(function(){
  			$scope.prices = "$"+ $scope.price1 + " to " + "$" + $scope.price2;
  			$scope.loaded = true;

  		}, 3000);
  	};

  	$scope.first_name =  ($scope.formData3.first_name !== null) ? $scope.formData3.first_name : "Vijay";
  	$scope.last_name =  ($scope.formData3.first_name !== null) ? $scope.formData3.last_name : "Menon";
  	

 }]);