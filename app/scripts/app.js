'use strict';


/* Script for lazy loading in Angular */
(function (ng) {
  'use strict';

  var app = ng.module('ngLoadScript', []);

  app.directive('script', function() {
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        if (attr.type === 'text/javascript-lazy') {
          var code = elem.text();
          var f = new Function(code);
          f();
        }
      }
    };
  });

}(angular));

/**
 * @ngdoc overview
 * @name bvl39App
 * @description
 * # bvl39App
 *
 * Main module of the application.
 */


angular
  .module('bvl39App', ['ngResource', 'ngValidate', 'ngMask', 'ui.router', 'ngSanitize', 'ngAnimate', 'ngLoadScript'])

  .config(function($stateProvider, $locationProvider, $urlRouterProvider){
  	$stateProvider
  	.state('home', {
      url: "/",
  		templateUrl: 'views/slide1.html',
  		controller:  'slide1Ctrl'
  	})
  	.state('/step2', {
  		templateUrl: 'views/slide2.html',
  		controller: 'slide2Ctrl'
  	})
    .state('/loader', {
      templateUrl: 'views/loader.html',
      controller: 'ldrCtrl'
    })
  	.state('/step3', {
  		templateUrl: 'views/slide3.html',
  		controller: 'slide3Ctrl'
  	})
    .state('/thank-you', {
      templateUrl: 'views/thank-you.html',
      controller: 'thankYouCtrl'
    });

  // $locationProvider.html5Mode(true);
   $urlRouterProvider.when('', '/');
   $urlRouterProvider.otherwise('/');

  })

  .directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'mm/dd/yy',
                minDate: -0,
                maxDate: "+90D",
                beforeShow: function(){
                   angular.element('#ui-datepicker-div').addClass('bluedatepicker');
                },
                onSelect: function (date) {
                    scope.formData.movedate = date;
                    scope.$apply();
                }
            });
        }
    };
  })
  .directive('ziphelp', function(){
    return {
      restrict: 'E',
      link: function(scope, element, attrs){
          var zh = new Ziphelp(element);
          var parent = element[0].parentNode;
          angular.element(parent).find('.ziphelp_btn').click(function(e){
             e.preventDefault();
             zh.toggle();
          });

      },
      templateUrl: 'views/zipfinder.html',
      replace: true
    };
  })
  .directive('googlesearch', function(){
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        var input = element[0];
        angular.element(input).on('focus', function(e){
           // do something (aka google stuff)
            var gs = new GoogleSearch(element, scope);
        });
      }
    }
  })
  .directive('googlemap', function(){
    return {
      restrict: 'E',
      link: function(scope, element, attrs, $rootScope){
  
         var map = new GoogleMap(element, scope);
      },
      replace: true,
      templateUrl: 'views/googlemap.html'
    }
  });


