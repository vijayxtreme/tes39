'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step2Ctrl
 * @description
 * # step2Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide2Ctrl', ['$scope', '$log', '$location', '$rootScope', function ($scope, $log, $location, $rootScope) {

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
  			$rootScope.$apply(function(){
  				$location.path('step3');
  			});
  		}
  	};

  	$scope.zipHelp = function($event){
  		$event.preventDefault();
  		window.alert("Hello world");

  	};
 	
    $scope.calHelp = function($event){
      $event.preventDefault();
      window.alert('Calendar!');
    };


  }]);