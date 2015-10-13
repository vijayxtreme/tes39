'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:HowCtrl
 * @description
 * # HowCtrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('FooterCtrl', ['$scope', '$log', '$rootScope', '$window', function ($scope, $log, $rootScope, $window) {
 	
  $scope.open = function(link){

     $window.open(link, "", "width=350,height=550");
  }; 
}]);