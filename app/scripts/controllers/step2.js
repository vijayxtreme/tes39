'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step2Ctrl
 * @description
 * # step2Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide2Ctrl', ['$scope', '$log', '$location', function ($scope, $log, $location) {
  	$scope.next = function(view){
 		$location.path(view);
 	};
  }]);