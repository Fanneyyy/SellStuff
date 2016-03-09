"use strict";

describe("SellersController should be unit tested here", function() {

	var scope;

	beforeEach(module("project3App"));

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();

		var SellersController = $controller('SellersController', {
			$scope: scope,
		});

	}));

	it('should declare the function sortColumns', function() {
		expect(scope.sortColumns).toBeDefined();
	});
});