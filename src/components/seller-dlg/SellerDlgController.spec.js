"use strict";

describe("SellerDlgController should be unit tested here", function() {

	var scope;

	var mockSeller = {
		id: 1,
		name: 'Sveinn Andri',
		category: 'Grænmeti',
		imagePath: 'http://www.visindavefur.is/myndir/graenmeti_030308.jpg'
	}


	beforeEach(module("project3App"));

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		scope.$close = function(seller){};
		scope.$dismiss = function(){};

		var SellerDlgController = $controller('SellerDlgController', {
			$scope: scope,
			currentSeller: mockSeller,
		});

	    spyOn(scope, "$close");
	   	spyOn(scope, "$dismiss");

	}));
	it('should call the function scope.close with mockSeller', function() {
		scope.onOk();
		expect(scope.$close).toHaveBeenCalledWith(mockSeller);
	});
	it('should call the function scope.dismiss', function() {
		scope.onCancel();
		expect(scope.$dismiss).toHaveBeenCalled();
	});
});