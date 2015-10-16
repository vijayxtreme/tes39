'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step1Ctrl
 * @description
 * # step1Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide1Ctrl', ['$scope', '$location', '$rootScope', '$http', '$state', '$window', function ($scope, $location, $rootScope, $http, $state, $window) {
   
    $scope.formData = {};
    $scope.formData.source = window.location.href; // get url source 

  	$scope.validationOptions = {
  		rules: {
  			from_zip: {
  				required: true,
  				minlength: 5,
  				maxlength: 5,
          // remote: {
          //     type: 'post',
          //     url: '/validate/validate/from-zipcode'
          // }
  			},
     
  		}, 
  		messages: {
  			from_zip: {
  				required: "Please enter in your zip code correctly",
  				minlength: "Must be 5 digits",
  				maxlength: "Cannot be more than 5 digits",
          // remote: "Please enter a valid zip code"
  			}
  		},
  		errorElement: 'div',
  		submitHandler: function(){

         // try{
         //    _gaq.push(['_trackEvent', 'desktop', '999moving', 'step1-test39']);
         //  }catch(e){}
  		  $rootScope.formData1 = $scope.formData;
  			$state.go('/step2');
  		
  		}
  	};

    $rootScope.howState = "step1";
    $rootScope.states = ['step1', 'step2', 'step3'];
    $rootScope.count = 0;

    $rootScope.toggle = function(){
      $rootScope.count++;

      if($rootScope.count < $rootScope.states.length){
        $rootScope.howState = $rootScope.states[$rootScope.count];
      }else {
        $rootScope.count = 0;
        $rootScope.howState = $rootScope.states[0];
      }

    };

    var how = angular.element('.how')[0];
    how.style.marginTop = "409px";

  }]);