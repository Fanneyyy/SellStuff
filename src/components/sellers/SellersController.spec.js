"use strict";

describe("SellersController should be unit tested here", function() {

    var mockSeller, scope, appResource, sellerDlg, centrisNotify;

    sellerDlg = {
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
        var SellersController = $controller('SellersController', {
            $scope: scope
        });
    }));

    it('should declare sortColumns', function() {

        expect(scope.sortColumns).toBeDefined();

    });
});