'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:ldrCtrl
 * @description
 * # ldrCtrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('ldrCtrl', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {

  	$scope.message = '<h3>Calculating...</h3>';

  	$scope.loaderPercent = 0;


  	$scope.countNumber = function(){
  		var speed1 = 68,
			speed2 = 72;
				
		count();

		function count(){
			$timeout(function(){
				$scope.loaderPercent++;
				if($scope.loaderPercent < 50){
					count();
				}else if ($scope.loaderPercent >=50 && $scope.loaderPercent < 100){
					speed1 = speed2;
					count();
					$scope.message = '<h3>Searching For Movers...</h3>';
				}else if ($scope.loaderPercent == 100){
					$scope.message = '<h2>Matching Movers Were Found!</h2>'
					$timeout(function(){
					    $state.go('/step3');
					}, 2000);
				}
		    }, speed1);
		}
  	};

  	$scope.countNumber();
  	$scope.date = new Date();
  	



  }]);
