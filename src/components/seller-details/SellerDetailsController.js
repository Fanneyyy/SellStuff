"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, ProductDlg, $routeParams, centrisNotify) {
	
	$scope.sellerId = parseInt($routeParams.sellerid);
	$scope.products = [];
	$scope.topTen = [];
	
	$scope.getTopTen = function getTopTen() {
		$scope.topTen = _.sortBy($scope.products, _.property('quantitySold')).reverse();
		$scope.topTen = _.take($scope.topTen, [10]);
	};

	AppResource.getSellerProducts($scope.sellerId).success(function(products) {
		$scope.products = products;
		$scope.getTopTen();
	}).error(function() {
		centrisNotify.error("sellerDetails.Messages.ProductsFailed");
	});

	AppResource.getSellerDetails($scope.sellerId).success(function(details) {
		$scope.sellerDetails = details;
	}).error(function() {
		centrisNotify.error("sellerDetails.Messages.DetailsFailed");
	});

	$scope.onAddProduct = function onAddProduct() {

		ProductDlg.show().then(function(product) {

			AppResource.addSellerProduct($scope.sellerId, product).success(function (product) {
				centrisNotify.success("productDlg.Messages.SaveSucceeded");
				$scope.products.push(product);
				$scope.getTopTen();
			}).error(function() {
				centrisNotify.error("productDlg.Messages.SaveFailed");
			});

		}, function() {
			centrisNotify.warning("productDlg.Messages.SaveCancelled");
		});
	};

	$scope.onViewProduct = function onViewProduct(p) {
		
		var newProduct = $.extend({}, p);
		ProductDlg.show(newProduct).then(function(product) {

			AppResource.updateSellerProduct($scope.sellerId, newProduct.id, product).success(function (product) {
				var current = _.find($scope.products, function(o){ return o.id === product.id;});
				current.name 			= product.name;
				current.price  			= product.price;
				current.quantitySold  	= product.quantitySold;
				current.quantityInStock = product.quantityInStock;
				current.imagePath 		= product.imagePath;
				$scope.getTopTen();
				centrisNotify.success("productDlg.Messages.EditSucceeded");
			}).error(function() {
				centrisNotify.error("productDlg.Messages.EditFailed");
			});

		}, function(msg) {
			if(msg === 'cancel') {
				centrisNotify.warning("productDlg.Messages.EditCancelled");
			}
		});

	};
});