'use strict';

angular.module('isoExploreApp')
  .directive('iso', function () {
    return {
      templateUrl: 'partials/iso',

      restrict: 'A',
      link: function postLink(scope, element, attrs) {
		var options = {
	        itemSelector: attrs.isotopeItemSelector || 'div',
	        layoutMode: attrs.isotopeLayoutMode || 'fitRows',
	        getSortData: scope.sortData || {}
        };
        element.isotope(options);
      }
    };
  });
