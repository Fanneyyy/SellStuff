"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, currentSeller) {

	if (currentSeller) {
		$scope.seller = currentSeller;
	}

	$scope.onOk = function onOk() {
		// Validation
		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};

});