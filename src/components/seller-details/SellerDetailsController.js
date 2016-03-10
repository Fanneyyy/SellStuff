"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, SellerDlg, $routeParams, $rootScope) {
	
	$scope.sellerId = parseInt($routeParams.sellerid);

	AppResource.getSellerProducts($scope.sellerId).success(function(products) {
		$scope.products = products;
	}).error(function() {
		console.log("Error in get seller products");
	});

	AppResource.getSellerDetails($scope.sellerId).success(function(details) {
		$scope.sellerDetails = details;
	}).error(function() {
		console.log("Error in get seller details");
	});
});