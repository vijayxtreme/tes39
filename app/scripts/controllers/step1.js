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
  			},
        // remote: {
        //     type: 'post',
        //     url: '/validate/validate/from-zipcode'
        // }
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
          // try{
          //   _gaq.push(['_trackEvent', 'desktop', '999moving', 'step1-test37']);
          // }catch(e){}
  		  $rootScope.formData1 = $scope.formData;
  			$state.go('/step2');
  		
  		}
  	};
    $scope.formData = {};
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