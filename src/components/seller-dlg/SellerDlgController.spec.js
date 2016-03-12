"use strict";

describe("SellerDlgController should be unit tested here", function() {

    var scope;
    var SellerDlgController;
    var mockSeller;

    beforeEach(module("project3App"));

    beforeEach(inject(function(AppResource) {
        AppResource.getSellerDetails(1).success(function(details) {
            mockSeller = details;
        });
    }));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        scope.$close = function(seller){};
        scope.$dismiss = function(){};

        SellerDlgController = $controller('SellerDlgController', {
            $scope: scope,
            currentSeller: mockSeller,
        });

        spyOn(scope, "$close");
        spyOn(scope, "$dismiss");

    }));
    it('should call the function scope.close with mockSeller', inject(function(AppResource) {
        scope.onOk();
        expect(scope.$close).toHaveBeenCalledWith(mockSeller);
    }));
    it('should call the function scope.dismiss', function() {
        scope.onCancel();
        expect(scope.$dismiss).toHaveBeenCalled();
    });
    it('should change scope message to sellerDlg.TitleAdd', inject(function($controller) {
        SellerDlgController = $controller('SellerDlgController', {
            $scope: scope,
            currentSeller: undefined,
        });
        expect(scope.message).toEqual("sellerDlg.TitleAdd");
    }));
});