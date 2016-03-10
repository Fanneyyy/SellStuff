"use strict";

describe("SellersController should be unit tested here", function() {

    var scope;
    var mockSeller;

    beforeEach(module("project3App"));

    beforeEach(inject(function(AppResource) {
        AppResource.getSellerDetails(1).success(function(details) {
        mockSeller = details;
        });
    }));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        var SellersController = $controller('SellersController', {
            $scope: scope
        });
    }));

    it('should declare sortColumns', function() {

        expect(scope.sortColumns).toBeDefined();

    });
});