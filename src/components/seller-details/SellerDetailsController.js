"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, ProductDlg, $routeParams, $rootScope, centrisNotify) {
	
	$scope.sellerId = parseInt($routeParams.sellerid);

	AppResource.getSellerProducts($scope.sellerId).success(function(products) {
		$scope.products = products;
	}).error(function() {
		centrisNotify.error("Error while getting products from the seller.");
	});

	AppResource.getSellerDetails($scope.sellerId).success(function(details) {
		$scope.sellerDetails = details;
	}).error(function() {
		centrisNotify.error("Error while getting information about the seller.");
	});

	$scope.onAddProduct = function onAddProduct() {

		ProductDlg.show().then(function(product) {

			AppResource.addSellerProduct($scope.sellerId, product).success(function (product) {
				centrisNotify.success("productDlg.Messages.SaveSucceeded");
				$scope.products.push(product);
			}).error(function() {
				centrisNotify.error("productDlg.Messages.SaveFailed");
			});

		}, function() {
			centrisNotify.info("The product will not be added.");
		});
	};

	// $scope.onEditSeller = function onEditSeller(s) {
	// 	var oldSeller = $.extend({}, s);
	// 	SellerDlg.show(oldSeller).then(function(seller) {

	// 		AppResource.updateSeller(oldSeller.id, seller).success(function (seller) {
	// 			centrisNotify.success(seller.name + " has been successfully edited.");

	// 			console.log("Seller updated");
	// 		}).error(function() {
	// 			centrisNotify.error(oldSeller.name + "was not edited.");
	// 		});

	// 	});
	// };
});