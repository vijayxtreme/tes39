'use strict';

/**
 * @ngdoc overview
 * @name bvl39App
 * @description
 * # bvl39App
 *
 * Main module of the application.
 */
angular
  .module('bvl39App', ['ngResource', 'ngRoute', 'ngValidate', 'ngMask'])

  .config(function($routeProvider){
  	$routeProvider
  	.when('/', {
  		templateUrl: 'views/slide1.html',
  		controller:  'slide1Ctrl'
  	})
  	.when('/step2', {
  		templateUrl: 'views/slide2.html',
  		controller: 'slide2Ctrl'
  	})
  	.when('/step3', {
  		templateUrl: 'views/slide3.html',
  		controller: 'slide3Ctrl'
  	})
    .when('/thank-you', {
      templateUrl: 'views/thank-you.html',
      controller: 'thankYouCtrl'
    });

  })

  .directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'mm/dd/yy',
                onSelect: function (date) {
                    scope.date = date;
                    scope.$apply();
                }
            });
        }
    };
  })
//directives can use custom templates
  .directive('ziphelp', function(){
    return {
      restrict: 'E',
      link: function(scope, element, attrs){
          var zh = new Ziphelp(element);
          var parent = element[0].parentNode;
          console.log(zh);
          angular.element(parent).find('.ziphelp_btn').click(function(e){
             e.preventDefault();
             zh.toggle();
          });

      },
      templateUrl: 'views/zipfinder.html',
      replace: true
    };
  });