"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, currentSeller) {

	if (currentSeller) {
		$scope.newSeller = currentSeller;
	}

	$scope.onOk = function onOk() {
		// TODO: Validation
		$scope.$close($scope.newSeller);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss('cancel');
	};

});