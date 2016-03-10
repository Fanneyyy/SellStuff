"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, SellerDlg, $routeParams, $rootScope, centrisNotify) {
	
	$scope.sellerId = parseInt($routeParams.sellerid);
	$scope.isEmpty = true;

	AppResource.getSellerProducts($scope.sellerId).success(function(products) {
		$scope.products = products;
		if ($scope.products.length > 0) {
			$scope.isEmpty = false;
		} else {
			$scope.isEmpty = true;
		}
	}).error(function() {
		centrisNotify.error("Error while getting products from the seller.");
	});

	AppResource.getSellerDetails($scope.sellerId).success(function(details) {
		$scope.sellerDetails = details;
	}).error(function() {
		centrisNotify.error("Error while getting information about the seller.");
	});
});