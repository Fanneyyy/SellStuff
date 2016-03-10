"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, SellerDlg, $routeParams, $rootScope, centrisNotify) {
	
	$scope.sellerId = parseInt($routeParams.sellerid);

	AppResource.getSellerProducts($scope.sellerId).success(function(products) {
		$scope.products = products;
	}).error(function() {
		centrisNotify.error("Error while getting products from the seller.");
		console.log("Error in get seller products");
	});

	AppResource.getSellerDetails($scope.sellerId).success(function(details) {
		$scope.sellerDetails = details;
	}).error(function() {
		centrisNotify.error("Error while getting information about the seller.");
	});
});