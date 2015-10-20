'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('MainCtrl', ['$scope', '$window', '$rootScope', function ($scope, $window, $rootScope) {
	  $scope.open = function(link){
	     $window.open(link, "", "width=350,height=550");
	  }; 
	  $rootScope.mapsLoaded = false;
  }]);
