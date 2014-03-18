'use strict';

angular.module('isoExploreApp')
  .controller('DemoCtrl', function ($scope, $http, isotopes) {

	$scope.elementsList = angular.copy(isotopes);

	var types = [
	'post-transition metal',
	'transition metal',
	'metalloid',
	'alkali metal',
	'alkaline-earth metal',
	'lanthanoid metal inner-transition',
	'noble-gas nonmetal'
	];

	$scope.add = function() {
	var css = types[Math.floor(Math.random()*types.length)];
	var newelement = {
	    name: Math.random().toString(36).substring(7),
	    symbol: Math.random().toString(36).substring(16),
	    number: '95',
	    weight: (Math.random() * 10).toFixed(4),
	    css: css,
	    category: 'lanthanoid'
	};
	$scope.elementsList.push(newelement);
	}

	$scope.clear = function() {
	$scope.elementsList = [];
	}

	$scope.reset = function() {
	$scope.elementsList = angular.copy(list);
	}
  });
