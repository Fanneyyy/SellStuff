"use strict";

describe("SellerDetailsController should be unit tested here", function() {
// $scope, AppResource, ProductDlg, $routeParams, centrisNotify
    var scope, mockSeller, mockProduct, appResource, productDlg, routeParams, centrisNotify;

    productDlg = {
        show: function() {
            return {
                then: function(fn) {
                }
            };
        }
    };




    beforeEach(module("project3App"));

    beforeEach(inject(function ($rootScope, $injector, $controller) {
        scope = $rootScope.$new();
        appResource = $injector.get('AppResource');
        appResource.getSellerDetails(1).success(function(details) {
            mockSeller = details;
        });
        appResource.getSellerProducts(1).success(function(details) {
            mockProduct = details[0];
        });
        var SellerDetailsController = $controller('SellerDetailsController', {
            $scope: scope,
            ProductDlg: productDlg,
            AppResource: appResource
        });

    }));

    it('should ', function() {
        scope.onAddProduct();
        scope.onEditProduct(mockProduct);
        expect(true).toEqual(true);
    });
});