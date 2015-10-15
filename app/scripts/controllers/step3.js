'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:step3Ctrl
 * @description
 * # step3Ctrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('slide3Ctrl', ['$scope', '$log', '$location','$rootScope', '$state', function ($scope, $log, $location, $rootScope, $state) {

  	$scope.validationOptions = {
  		rules: {
  			first_name: {
  				required: true,
          // remote: {
          //     type: 'post',
          //     url: '/validate/validate/firstname'
          // }
  			},
  			last_name: {
  				required: true,
          // remote: {
          //     type: 'post',
          //     url: '/validate/validate/lastname'
          // }
  			},
  			email: {
  				required: true,
          email:true,
          // remote: {
          //   type: 'post',
          //   url: '/validate/validate/email'
          // }
  			},
  			phone: {
  				required: true,
  				minlength:14,
  				maxlength:14,
          // remote: {
          //     type: 'post',
          //     url: '/validate/validate/phone'
          // }
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
        $rootScope.formData3 = $scope.formData;
        // $http(
        //     '/validate/validate/send',
        //     {
        //       source: $('#source').val()
        //     }).success(function(data){
        //       $scope.calculate();
        //       $scope.conversion(1070276245,"Ls4OCOWhRhCVvaz-Aw");
        //     }).error(function(e){console.log(e)});
        
  			$state.go('/thank-you');
  		}
  	};

    $scope.calculate = function(){
      /* 
        var start = $("#zip_from").val(),
        end = $("#zip_to").val(),
        $namePlaceholder = $("#person-name"),
        $name = $("#first_name").val() + " " + $("#last_name").val();

        var callback = function(response, status) {

          if (status != google.maps.DistanceMatrixStatus.OK) {
            console.log("I am error.");
          } else {
            var origins = response.originAddresses;
              var destinations = response.destinationAddresses;
            var test = '';
            var str1 = origins.toString();
            var str2 = destinations.toString();

            var fixHeight = function(){
            switch(window.orientation)
            {
              case -90:
              case 90:
                $("#main.container").css('height','610px');
                break;
              default:
                $("#main.container").css('height','658px');
              break;
            }
            };

            if(window.innerWidth < 1024){
                window.addEventListener('orientationchange', fixHeight);
              fixHeight();
            }
            //document.getElementById('main').style.height = '1140px';

            if( str1.match(/\bUSA\b/) && str2.match(/\bUSA\b/)){
              try{
                for (var i = 0; i < origins.length; i++) {
                var results = response.rows[i].elements;
                for (var j = 0; j < results.length; j++) {
                   test += results[j].distance.text;
                }
                }
              var $rooms;
                if($('#number_of_rooms').val() != ''){
                $rooms = $('#number_of_rooms').val()
                }
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
              $rooms = roomTable[$rooms];


              $.post(
                  '/validate/calculator/calc',
                  {
                    rooms: $rooms,
                    miles: test
                  },
                  function(data){
                    //console.log(data)
                    var d = $.parseJSON(data);
                    setTimeout(
                      function(){
                      $(".num_of_rooms").each(function(k,v){ $(v).text($("#number_of_rooms").val()) });
                      $("#calculator").html('Your quote range is: <span class="thePrice">'+ '$' + d['self_service_small']['min'] + ' to $' + d['full_service_p_large']['max'] + '</span>');
                        
                        $.each(d, function(k, v){
                          $("#"+k).addClass('prices');
                          $("#"+k).html("$" + v['min'] + " - $" + v['max']);
                        });                       

                        $(".quote-columns table").fadeIn();
      
                      }
                    , 2000 );
                  }
                );    
              }catch(e){
                setTimeout(
                  function(){
                    $("#calculator").html("There was an error trying to retrieve your quote.");
                  }
                , 3000);
              }
            }
            else{
            setTimeout(
              function(){
                $("#calculator").html("Unable to calculate.  Zip codes requested may not be available for service.");
              }
            , 3000);
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

      */
    };

    $scope.conversion = function(id, val){

    };

    $scope.formData = {};
    $rootScope.howState = "step4";
     var how = angular.element('.how')[0];
     how.style.marginTop = "500px";

  }]);