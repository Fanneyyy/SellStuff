"use strict";

describe("SellerDetailsController should be unit tested here", function() {

    var scope, appResource, productDlg, routeParams, centrisNotify;

    productDlg = {
        show: function(object) {
            return {
                then: function(fn) {

                } 
            }
        }
    }


    beforeEach(module("project3App"));

    beforeEach(inject(function ($rootScope, $injector, $controller) {
        scope = $rootScope.$new();
        appResource = $injector.get('AppResource');

        var SellerDetailsController = $controller('SellerDetailsController', {
            $scope: scope
        });

    }));

    it('should ', function() {
        expect(true).toEqual(true);
    });
});