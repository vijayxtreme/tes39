'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('MainCtrl', ['$scope', '$window', function ($scope, $window) {
	  $scope.open = function(link){
	     $window.open(link, "", "width=350,height=550");
	  }; 
  }]);
