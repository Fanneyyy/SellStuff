"use strict";

describe("ProductDlgController should be unit tested here", function() {

    var scope;

    var mockProduct;

    var ProductDlgController;

    beforeEach(module("project3App"));

    beforeEach(inject(function(AppResource) {
        AppResource.getSellerProducts(1).success(function(details) {
            mockProduct = details[0];
        });
    }));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        scope.$close = jasmine.createSpy('$close');
        scope.$dismiss = jasmine.createSpy('$dismiss');

        ProductDlgController = $controller('ProductDlgController', {
            $scope: scope,
            currentProduct: mockProduct
        });





    }));
    it('should call the function scope.close with mockProduct', function() {
        scope.onOk();
        expect(scope.$close).toHaveBeenCalledWith(mockProduct);
    });
    it('should call the function scope.dismiss on cancel', function() {
        scope.onCancel();
        expect(scope.$dismiss).toHaveBeenCalledWith('cancel');
    });
    it('should call the function scope.dismiss on done', function() {
        scope.onDone();
        expect(scope.$dismiss).toHaveBeenCalledWith('done');
    });
    it('should change scope has submited to true', function() {
        scope.hasSubmitted = false;
        scope.validate();
        expect(scope.hasSubmitted).toEqual(true);
    });
    it('should change scope edit to false', inject(function($controller) {
        ProductDlgController = $controller('ProductDlgController', {
            $scope: scope,
            currentProduct: undefined,
        });
        expect(scope.edit).toEqual(false);
    }));
});