'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step1Ctrl
 * @description
 * # step1Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide1Ctrl', ['$scope', '$location', function ($scope, $location) {
 	$scope.next = function(view){
 		$location.path(view);
 	};

 }]);