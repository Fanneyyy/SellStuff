"use strict";
describe('ProductDlg factory should be unit tested here', function () {

    var mockProduct;

    beforeEach(module('project3App'));

    beforeEach(inject(function(AppResource) {
        AppResource.getSellerProducts(1).success(function(details) {
            mockProduct = details[0];
        });
    }));

    it('can get an instance of SellerDlg', inject(function(ProductDlg) {
        expect(ProductDlg).toBeDefined();
    }));

    it('SellerDlg.show should be defined', inject(function(ProductDlg) {
        ProductDlg.show(mockProduct);
        expect(ProductDlg.show).toBeDefined();
    }));
});