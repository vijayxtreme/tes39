'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step2Ctrl
 * @description
 * # step2Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide2Ctrl', ['$scope', '$log', '$location', '$rootScope', '$state', function ($scope, $log, $location, $rootScope, $state) {

  	$scope.validationOptions = {
  		rules: {
  			to_zip: {
  				required: true,
  				minlength: 5,
  				maxlength: 5
  			},
  			move_date: {
  				required: true,
  			},
  			move_size: {
  				required: true,
  			}
  		}, 
  		messages: {
  			zip: {
  				required: "Please enter in your zip code correctly",
  				minlength: "Must be 5 digits",
  				maxlength: "Cannot be more than 5 digits"
  			},
  			move_date: {
  				required: "Please select a date"
  			},
  			move_size: {
  				required: "Please select a move size"
  			}
  		}, 
  		errorElement: 'div',
  		submitHandler: function(){
        $rootScope.formData2 = $scope.formData;
  			$state.go('/loader')
  		}
  	};

  	$scope.zipHelp = function($event){
  		$event.preventDefault();
  	};
 	
    $scope.calHelp = function($event){
      $event.preventDefault();
      angular.element('#move_date').datepicker('show');

    };

    $scope.formData = {};


  }]);
