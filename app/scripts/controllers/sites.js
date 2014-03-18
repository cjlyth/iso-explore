'use strict';

angular.module('isoExploreApp')
  .controller('SitesCtrl', function ($scope, $parse, $interpolate, $filter) {

  	$scope.$watch('siteUrl', function(newSiteUrl){
	  	var x = $interpolate(newSiteUrl);
	  	$scope.fieldKeys = [];
	  	angular.forEach(x.parts, function(part, idx, parts){
	  		if (angular.isFunction(part)) {
				if (part.literal || part.constant) {
					console.dir(part);
				} else {
					$scope.fieldKeys.push(part.exp);
				}
	  		} else {
	  			console.log('string part',part);
	  		}
	  	});  		
  	});
  	$scope.siteUrl = 'http://localhost/{{firstName}}?q={{ query }}';


    
  });
