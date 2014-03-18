'use strict';

angular.module('isoExploreApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Demo',
      'link': '/demo'
    },{
      'title': 'Demo2',
      'link': '/demo2'
    },{
      'title': 'Sites',
      'link': '/sites'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
