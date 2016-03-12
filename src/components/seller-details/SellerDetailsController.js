"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, ProductDlg, $routeParams, centrisNotify) {
	
	$scope.sellerId = parseInt($routeParams.sellerid);
	$scope.products = [];

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
				centrisNotify.success(product.name + " has been successfully added.");
				$scope.products.push(product);
			}).error(function() {
				centrisNotify.error("The product will not be added due to error.");
			});

		}, function() {
			centrisNotify.info("The product will not be added.");
		});
	};

	$scope.onEditProduct = function onEditProduct(p) {

		var oldProduct = $.extend({}, p);
		ProductDlg.show(oldProduct).then(function(product) {

			AppResource.updateSellerProduct($scope.sellerId, oldProduct.id, product).success(function (product) {
				var current = _.find($scope.products, function(o){ return o.id === product.id;});
				current.name 			= product.name;
				current.price  			= product.price;
				current.quantitySold  	= product.quantitySold;
				current.quantityInStock = product.quantityInStock;
				current.imagePath 		= product.imagePath;
				centrisNotify.success(product.name + " has been successfully edited.");
			}).error(function() {
				centrisNotify.error(oldProduct.name + "was not edited.");
			});

		}, function() {
			centrisNotify.info(oldProduct.name + " will not be edited.");
		});
	};
});