"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	$scope.sortType = 'name'; // set the default sort type
  	$scope.sortReverse = false;  // set the default sort order
  	$scope.searchCategory = ''; // set the default search/filter term

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	});
});