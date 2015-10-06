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
  .module('bvl39App', ['ngResource', 'ngRoute', 'ngValidate'])

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
  	});

  });


