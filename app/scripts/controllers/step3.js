'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step3Ctrl
 * @description
 * # step3Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide3Ctrl', ['$scope', '$log', '$location','$rootScope', '$state', '$http', '$timeout', function ($scope, $log, $location, $rootScope, $state, $http, $timeout) {

  	$scope.validationOptions = {
  		rules: {
  			first_name: {
  				required: true,
          remote: {
              type: 'post',
              url: '/validate/validate/firstname'
          }
  			},
  			last_name: {
  				required: true,
          remote: {
              type: 'post',
              url: '/validate/validate/lastname'
          }
  			},
  			email: {
  				required: true,
          email:true,
          remote: {
            type: 'post',
            url: '/validate/validate/email'
          }
  			},
  			phone: {
  				required: true,
  				minlength:14,
  				maxlength:14,
          remote: {
              type: 'post',
              url: '/validate/validate/phone'
          }
  			}

  		}, 
  		messages: {
  			first_name: {
  				required: "Please enter your first name",
          remote: "Please enter a valid first name"
  			},
  			last_name: {
  				required: "Please enter your last name",
          remote: "Please enter a valid last name"
  			},
  			email: {
  				required: "Please enter your email address",
          remote: "Please enter a valid email address"
  			},
  			phone: {
  				required: "Please enter your phone number",
  				minlength: "Phone number must be 10 digits",
  				maxlength: "Phone number cannot be greater than 10 digits",
          remote: "Please enter a valid US phone number"
  			}
  		}, 
  		errorElement: 'div',
  		submitHandler: function(){
        $rootScope.formData3 = $scope.formData;
        $http(
            '/validate/validate/send',
            {
              source: $rootScope.formData1.source
            }).success(function(data){
              $scope.calculate();
              $scope.conversion(1070276245,"Ls4OCOWhRhCVvaz-Aw");
            }).error(function(e){console.log(e)});
        
  			$state.go('/thank-you');
  		}
  	};

    $rootScope.messages = {
      success: '',
      error: 'Nothing happened'
    };

    $scope.calculate = function(){
       
        var start = $rootScope.formData1.from_zip;
        var end = $rootScope.formData2.to_zip;
    
        var callback = function(response, status) {

          if (status != google.maps.DistanceMatrixStatus.OK) {
            console.log("I am error.");
          } else {
            var origins = response.originAddresses;
              var destinations = response.destinationAddresses;
            var test = '';
            var str1 = origins.toString();
            var str2 = destinations.toString();
                        
            if( str1.match(/\bUSA\b/) && str2.match(/\bUSA\b/)){
              try{
                for (var i = 0; i < origins.length; i++) {
                  var results = response.rows[i].elements;
                  for (var j = 0; j < results.length; j++) {
                     test += results[j].distance.text;
                  }
                 }
              
                var rooms = $rootScope.formData2.move_size;
                
                var roomTable =  {  
                  'Studio'  : 'studio',
                  '1 Bedroom'   : 'one bedrooms apartment',
                  '2 Bedrooms'  : 'two bedrooms apartment',
                  '3 Bedrooms'  : 'three bedrooms apartment',
                  '4 Bedrooms'  : 'four bedrooms apartment',
                  '5 Bedrooms'  : 'five bedrooms apartment',
                  '6 Bedrooms'  : 'six bedrooms apartment',
                  'Commercial Move' : 'six bedrooms and more apartment'
                };
                
                rooms = roomTable[rooms];


                $http('/validate/calculator/calc',{ rooms: rooms, miles: test })
                  .success(function(data){
                    console.log(data)
                    var d = $.parseJSON(data);
                    $rootScope.messages.success = 'Your quote range is: '+ '$' + d['self_service_small']['min'] + ' to $' + d['full_service_p_large']['max'];
                  })
                  .error(function(e){
                      $rootScope.messages.error = 'There was a problem retrieving your quote from our database.  Please check back again later.';
                  });
                    
               }catch(e){
                 $rootScope.messages.error = 'There was a problem retrieving your quote from our provider.  Please check back again later.';
               }
            }
            else{
                  $rootScope.messages.error = "Unable to calculate.  Zip codes requested may not be available for service.";
            }
          }
        };

        var calculateDistances = function() {
          var service = new google.maps.DistanceMatrixService();
          service.getDistanceMatrix(
            {
            origins: [start],
            destinations: [end],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            avoidHighways: false,
            avoidTolls: false
            }, callback);
        };
        
        calculateDistances();
      
    };

    $scope.conversion = function(google_conversion_id,google_conversion_label){
      try{
        _gaq.push(['_trackEvent', 'desktop', '999moving', 'step3-test39']);
       $timeout(
          function(){
            _gaq.push(['_trackEvent', 'Conversion', 'Landing-test39', 'Validate']);
          }, 100
        );
        //__adroll.record_user({"adroll_segments": "quote_complete"});
        }catch(e){
          console.log(e);
        }
        //google conversion script
        var image = new Image(1,1); 
        image.src = "http://www.googleadservices.com/pagead/conversion/"+google_conversion_id+"/?label="+google_conversion_label + "&script=0";
        angular.element('#mstag').attr('src','//flex.msn.com/mstag/tag/224166ee-2898-4858-ad70-bbad4fbe8c69/analytics.html?dedup=1&domainId=334508&type=1&revenue=&actionid=1320');
    };

    $scope.formData = {};
    $rootScope.howState = "step4";
     var how = angular.element('.how')[0];
     how.style.marginTop = "500px";

  }]);