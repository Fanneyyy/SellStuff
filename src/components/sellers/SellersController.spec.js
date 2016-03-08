// "use strict";

// describe("SellersController should be unit tested here", function() {

// 	var scope;
// 	var mockTranslate = function mockTranslate(str, param) {
// 		return {
// 			then: function(fn) {
// 				var msg = str;
// 				if (param !== undefined) {
// 					str = str + " " + param.value;
// 				}
// 				fn(str);
// 			}
// 		};
// 	};

// 	mockTranslate.use = function use(str) {
// 	};

// 	beforeEach(module("project3App"));

// 	beforeEach(inject(function ($rootScope, $controller) {
// 		scope = $rootScope.$new();

// 		var SellersController = $controller('SellersController', {
// 			$scope: scope,
// 			$translate: mockTranslate
// 		});

// 		spyOn(mockTranslate, "use");
// 	}));

// 	it('should declare the function changeLanguage', function() {
// 		expect(scope.changeLanguage).toBeDefined();
// 	});

// 	it('should call the function use from translate', function() {
// 		var key = 'is';
// 		scope.changeLanguage(key);
// 		expect(mockTranslate.use).toHaveBeenCalledWith('is');
// 	});
// });