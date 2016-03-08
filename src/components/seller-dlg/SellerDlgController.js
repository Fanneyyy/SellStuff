"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope) {

	$scope.onOk = function onOk() {
		// Validation
		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};

});