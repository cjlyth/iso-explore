'use strict';

angular.module('isoExploreApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ng-isotope'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/demo', {
        templateUrl: 'partials/demo',
        controller: 'DemoCtrl'
      })
      .when('/demo2', {
        templateUrl: 'partials/demo2',
        controller: 'Demo2Ctrl'
      })
      .when('/sites', {
        templateUrl: 'partials/sites',
        controller: 'SitesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });