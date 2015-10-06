'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step3Ctrl
 * @description
 * # step3Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide3Ctrl', ['$scope', '$log', '$location', function ($scope, $log, $location) {
  	$scope.next = function(view){
 		$location.path(view);
 	};
  }]);