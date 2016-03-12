"use strict";

angular.module("project3App").directive('product', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			'product': '=',
			'edit': '&onEdit'
		},
		templateUrl: 'components/product/product.html'
	};
});