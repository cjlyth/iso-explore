'use strict';

angular.module('isoExploreApp')
  .controller('Demo2Ctrl', function ($scope, $http) {
  	$scope.colorList = [];
  	var color, row = [	
  				{ css: 'red' },
			  	{ css: 'orange' },
			  	{ css: 'blue' },
			  	{ css: 'green' },
			  	{ css: 'purple' },
			  	{ css: 'yellow' }];

	for (var i = 10 - 1; i >= 0; i--) {
		for (var c = row.length - 1; c >= 0; c--) {
			color = {
				id: (i*100) + c, 
				css: row[c].css
			};
			$scope.colorList.push(color);
		};
	};
  	$scope.applySort = function(){
  		console.log('test', $scope.colorList);
  	}
  	$scope.applySort();
  });
