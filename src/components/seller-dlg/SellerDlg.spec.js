"use strict";
describe('SellerDlgController should be unit tested here', function () {
    var mockSeller;

    beforeEach(module('project3App'));
    beforeEach(inject(function(AppResource) {
        AppResource.getSellerDetails(1).success(function(details) {
            mockSeller = details;
        });
    }));

    it('can get an instance of SellerDlg', inject(function(SellerDlg) {
        expect(SellerDlg).toBeDefined();
    }));

    it('SellerDlg.show should be defined', inject(function(SellerDlg) {
        SellerDlg.show(mockSeller);
        expect(SellerDlg).toBeDefined();
    }));
});