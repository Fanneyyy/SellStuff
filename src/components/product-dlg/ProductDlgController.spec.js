"use strict";

describe("ProductDlgController should be unit tested here", function() {

    var scope;

    var mockProduct;

    beforeEach(module("project3App"));

    beforeEach(inject(function(AppResource) {
        AppResource.getSellerProducts(1).success(function(details) {
            mockProduct = details[0];
        });
    }));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        scope.$close = function(seller){};
        scope.$dismiss = function(){};

        var SellerDlgController = $controller('ProductDlgController', {
            $scope: scope,
            currentProduct: mockProduct
        });

        spyOn(scope, "$close");
        spyOn(scope, "$dismiss");

    }));
    it('should call the function scope.close with mockProduct', function() {
        scope.onOk();
        expect(scope.$close).toHaveBeenCalledWith(mockProduct);
    });
    it('should call the function scope.dismiss', function() {
        scope.onCancel();
        expect(scope.$dismiss).toHaveBeenCalled();
    });
});