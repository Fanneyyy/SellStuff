"use strict";

angular.module("project3App").controller("ProductDetailsController",
function ProductDetailsController($scope) {

	// if (currentProduct) {
	// 	$scope.newProduct = currentProduct;
	// }

	$scope.onEdit = function onEdit() {
		// TODO: Validation
		//$scope.$close($scope.newProduct);
	};

	$scope.onDone = function onDone() {
		$scope.$dismiss('done');
	};

});