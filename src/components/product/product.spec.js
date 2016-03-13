"use strict";
describe("product directive", function() {
	var template = '<product product="product" on-edit="onViewProduct(product)"></product>';
	var scope;
	var compile;
	var element;
	var backend;
	beforeEach(module("project3App"));
	beforeEach(module('src/components/seller-details/index.html'))
	beforeEach(inject(function($rootScope, $compile) {
		element = angular.element('<product product="product" on-edit="onViewProduct(product)"> </product>')
		scope = $rootScope.$new();
		scope.product = {
			id: 1,
			name: "A-gúrkur",
			price: 299,
			quantitySold: 99,
			quantityInStock: 199,
			imagePath: "myndir.is/gurkur.jpg"
		};
		compile = $compile(element)(scope);
	}));
	it("Directive should be defined", function() {
		expect(compile).toBeDefined();
	});
});