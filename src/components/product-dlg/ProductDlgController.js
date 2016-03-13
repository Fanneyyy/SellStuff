"use strict";

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, currentProduct) {

	$scope.newProduct = {};
	$scope.hasSubmitted = false;

	if (currentProduct) {
		$scope.newProduct = currentProduct;
		$scope.edit = true;
	} else {
		$scope.edit = false;
	}

	$scope.onOk = function onOk() {
		$scope.$close($scope.newProduct);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss('cancel');
	};

	$scope.onDone = function onDone() {
		$scope.$dismiss('done');
	};

	$scope.validate = function validate() {
        $scope.hasSubmitted = true;
        console.log($scope.hasSubmitted);
    };

});