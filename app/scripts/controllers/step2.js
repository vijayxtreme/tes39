'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step2Ctrl
 * @description
 * # step2Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide2Ctrl', ['$scope', '$log', '$location', '$rootScope', '$state', '$http', function ($scope, $log, $location, $rootScope, $state, $http) {

  	$scope.validationOptions = {
  		rules: {
  			to_zip: {
  				required: true,
  				minlength: 5,
  				maxlength: 5,
        // remote: {
        //   type: 'post',
        //   url: '/validate/validate/to-zipcode'
        // }
  			},
  			move_date: {
  				required: true,
          // remote: {
          //   type: 'post',
          //   url: '/validate/validate/movedate'
          // }          
  			},
  			move_size: {
  				required: true,
          // remote: {
          //   type: 'post',
          //   url: '/validate/validate/rooms'
          // }
  			},
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
          // try{
          //   _gaq.push(['_trackEvent', 'desktop', '999moving', 'step2-test37']);
          // }catch(e){}
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
