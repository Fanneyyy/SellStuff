"use strict";

describe("SellerDlgController should be unit tested here", function() {

	var scope;

	beforeEach(module("project3App"));

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();

		var SellerDlgController = $controller('SellerDlgController', {
			$scope: scope,
		});

	}));
// TODO: Need to find how to use currentSeller for this controller
});