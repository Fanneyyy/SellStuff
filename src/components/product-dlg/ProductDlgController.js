"use strict";

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, currentProduct) {

	$scope.newProduct = {};

	if (currentProduct) {
		$scope.newProduct = currentProduct;
		$scope.edit = true;
	} else {
		$scope.edit = false;
	}

	$scope.onOk = function onOk() {
		// TODO: Validation
		$scope.$close($scope.newProduct);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss('cancel');
	};

});