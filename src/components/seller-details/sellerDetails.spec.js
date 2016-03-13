"use strict";
describe("sellerDetails directive", function() {
    var scope;
    var compile;
    var element;
    beforeEach(module("project3App"));
    beforeEach(module('src/components/seller-details/index.html'));
    beforeEach(inject(function($rootScope, $compile) {
        element = angular.element('<seller-details name={{sellerDetails.name}} category={{sellerDetails.category}} image={{sellerDetails.imagePath}}></seller-details>');
        scope = $rootScope.$new();
        scope.name = "Sveinn Andri";
        scope.category = "Lögmaður";
        scope.image = "http://logmadur.is/sveinnandri.jpg";

        compile = $compile(element)(scope);
    }));
    it("Directive should be defined", function() {
        expect(compile).toBeDefined();
    });
});