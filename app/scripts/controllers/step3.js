'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step3Ctrl
 * @description
 * # step3Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide3Ctrl', ['$scope', '$log', '$location','$rootScope', function ($scope, $log, $location, $rootScope) {

  	$scope.validationOptions = {
  		rules: {
  			first_name: {
  				required: true
  			},
  			last_name: {
  				required: true
  			},
  			email: {
  				required: true
  			},
  			phone: {
  				required: true,
  				minlength:10,
  				maxlength:10
  			}

  		}, 
  		messages: {
  			first_name: {
  				required: "Please enter your first name",
  			},
  			last_name: {
  				required: "Please enter your last name",
  			},
  			email: {
  				required: "Please enter your email address",
  			},
  			phone: {
  				required: "Please enter your phone number",
  				minlength: "Phone number must be 10 digits",
  				maxlength: "Phone number cannot be greater than 10 digits"
  			}
  		}, 
  		errorElement: 'div',
  		submitHandler: function(){
  			$rootScope.$apply(function(){
  				$location.path('thank-you');
  			});
  		}
  	};

  }]);