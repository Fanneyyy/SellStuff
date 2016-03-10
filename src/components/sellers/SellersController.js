"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

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
				// seller has been added
			}).error(function() {
				// show error with centris notify
			});
		});
	};

	$scope.onEditSeller = function onEditSeller(s) {
		var oldSeller = $.extend({}, s);
		SellerDlg.show(oldSeller).then(function(seller) {

			AppResource.updateSeller(oldSeller.id, seller).success(function (seller) {
				console.log("Seller updated");
			}).error(function() {
				// show error with centris notify
			});

		});
	};
});