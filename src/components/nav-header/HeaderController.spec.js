"use strict";

describe("HeaderController ", function() {

	var scope, mockTranslate;

	mockTranslate = {
	};

	beforeEach(module("project3App"));

	beforeEach(inject(function ($rootScope, $controller) {
		mockTranslate.use = jasmine.createSpy('use');
		scope = $rootScope.$new();

		var HeaderController = $controller('HeaderController', {
			$scope: scope,
			$translate: mockTranslate
		});

	}));

	it('should declare the function changeLanguage', function() {
		expect(scope.changeLanguage).toBeDefined();
	});

	it('should call the function use from translate with correct argument', function() {
		var key = 'is';		
		scope.changeLanguage(key);
		expect(mockTranslate.use).toHaveBeenCalledWith('is');
	});
});