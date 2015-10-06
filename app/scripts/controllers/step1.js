'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step1Ctrl
 * @description
 * # step1Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide1Ctrl', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {
 	
  	$scope.validationOptions = {
  		rules: {
  			zip: {
  				required: true,
  				minlength: 5,
  				maxlength: 5
  			}
  		}, 
  		messages: {
  			zip: {
  				required: "Please enter in your zip code correctly",
  				minlength: "Must be 5 digits",
  				maxlength: "Cannot be more than 5 digits"
  			}
  		}, 
  		errorElement: 'div',
  		submitHandler: function(){
  			$rootScope.$apply(function(){
  				$location.path('step2');
  			});
  		}
  	};

  	$scope.zipHelp = function($event){
  		$event.preventDefault();
  		window.alert('zip HELP!');
  	};

 }]);