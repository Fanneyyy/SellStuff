"use strict";
describe("productForm directive", function() {
    var scope;
    var compile;
    var element;
    beforeEach(module("project3App"));
    beforeEach(module('src/components/product-dlg/index.html'));
    beforeEach(inject(function($rootScope, $compile) {
        element = angular.element('<product-form new-product="newProduct"></product-form>');
        scope = $rootScope.$new();
        scope.newProduct = {
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