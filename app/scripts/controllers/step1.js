'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step1Ctrl
 * @description
 * # step1Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide1Ctrl', ['$scope', '$location', '$rootScope', '$http', '$state', function ($scope, $location, $rootScope, $http, $state) {

  	$scope.validationOptions = {
  		rules: {
  			from_zip: {
  				required: true,
  				minlength: 5,
  				maxlength: 5
  			}
  		}, 
  		messages: {
  			from_zip: {
  				required: "Please enter in your zip code correctly",
  				minlength: "Must be 5 digits",
  				maxlength: "Cannot be more than 5 digits"
  			}
  		}, 
  		errorElement: 'div',
  		submitHandler: function(){

        // $http.get('/validate/validate/')
        //   .success(function(data){
        //       console.log(data);

        //       $scope.city = data.city.name;

        //   })
        //   .error(function(err){
        //     console.log(err);
        //   });

  		  $rootScope.formData1 = $scope.formData;
  			$state.go('/step2');
  		
  		}
  	};

    $scope.formData = {};
   
  }]);