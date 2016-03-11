"use strict";

describe("ProductDlgController should be unit tested here", function() {

    var scope;
    var mockProducts;
    var mockProduct;

    beforeEach(module("project3App"));

    beforeEach(inject(function(AppResource) {
        AppResource.getSellerProducts(1).success(function(details) {
        mockProducts = details;
        if (mockProducts.length > 0) {
            mockProduct = mockProducts[0];
        }
        });
    }));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        scope.$close = function(seller){};
        scope.$dismiss = function(){};

        var ProductDlgController = $controller('ProductDlgController', {
            $scope: scope,
            currentProduct: mockProduct,
        });
    }));

    //     spyOn(scope, "$close");
    //      spyOn(scope, "$dismiss");

    // }));
    // it('should call the function scope.close with mockSeller', inject(function(AppResource) {
    //  scope.onOk();
    //  expect(scope.$close).toHaveBeenCalledWith(mockSeller);
    // }));
    // it('should call the function scope.dismiss', function() {
    //  scope.onCancel();
    //  expect(scope.$dismiss).toHaveBeenCalled();
    // });
});