"use strict";

angular.module("project3App").directive('productForm', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			'newProduct': '='
		},
		templateUrl: 'components/product-form/productForm.html'
	};
});