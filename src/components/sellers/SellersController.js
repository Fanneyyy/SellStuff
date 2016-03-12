"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, SellerDlg, centrisNotify) {
	$scope.sortType = 'name'; // set the default sort type
  	$scope.sortReverse = false;  // set the default sort order

  	$scope.sortColumns = function sortColumns(category) {
  		$scope.sortType = category;
  		$scope.sortReverse = !$scope.sortReverse;
  	};

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	});

	$scope.onAddSeller = function onAddSeller() {

		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function (seller) {
				centrisNotify.success(seller.name + " has been successfully added.");
			}).error(function() {
				centrisNotify.error("The seller will not be added due to error.");
			});
		}, function() {
			centrisNotify.info("The seller will not be added.");
		});
	};

	$scope.onEditSeller = function onEditSeller(s) {
		var oldSeller = $.extend({}, s);
		SellerDlg.show(oldSeller).then(function(seller) {

			AppResource.updateSeller(oldSeller.id, seller).success(function (seller) {
				centrisNotify.success(seller.name + " has been successfully edited.");

			}).error(function() {
				centrisNotify.error(oldSeller.name + " was not edited.");
			});

		}, function() {
			centrisNotify.info(oldSeller.name + " will not be edited.");
		});
	};
});