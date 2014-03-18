'use strict';

angular.module('isoExploreApp')
  .controller('SitesCtrl', function ($scope, $parse, $interpolate, $filter) {
  	var x = $interpolate('http://localhost/{{firstName}}?q={{ query | json}}');
  	angular.forEach(x.parts, function(part, idx, parts){
  		if (angular.isFunction(part)) {
// $filter('json')(arguments)
			if (part.literal || part.constant) {
				console.dir(part);
			} else {
				console.log(part.exp);
			}
  		} else {
  			console.log('string part',part);
  		}
  	});
    
  });
