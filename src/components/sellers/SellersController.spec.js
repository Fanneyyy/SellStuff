"use strict";

describe("SellersController should be unit tested here", function() {
// $scope, AppResource, SellerDlg, centrisNotify
    var SellersController, scope, mockSeller, appResource, sellerDlg, centrisNotifier;

    centrisNotifier = {
    };
    describe("Testing sort", function() {
        beforeEach(module("project3App"));
        beforeEach(inject(function ($rootScope, $injector, $controller) {
            scope = $rootScope.$new();
            appResource = $injector.get('AppResource');
            appResource.getSellerDetails(1).success(function(details) {
                mockSeller = details;
            });
            centrisNotifier.success = jasmine.createSpy('success');
            centrisNotifier.error = jasmine.createSpy('error');
            SellersController = $controller('SellersController', {
                $scope: scope,
                SellerDlg: sellerDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier
            });
        }));
        it("sortColumns should be declared", function() {
            expect(scope.sortColumns).toBeDefined();
        });
        it("change sortType to 'speed'", function() {
            scope.sortColumns('speed');
            expect(scope.sortType).toEqual('speed');
        });
    });

    describe("Testing added seller", function() {
        sellerDlg = {
            addSeller: function(mockSeller) {
                this.seller = mockSeller;
            },
            show: function() {
                var seller = this.seller;
                return {
                    then: function(fn) {
                        fn(seller);
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
            centrisNotifier.success = jasmine.createSpy('success');
            centrisNotifier.error = jasmine.createSpy('error');
            SellersController = $controller('SellersController', {
                $scope: scope,
                SellerDlg: sellerDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier
            });
        }));
        it('should add seller', function() {
            sellerDlg.addSeller(mockSeller);
            scope.onAddSeller();
            expect(centrisNotifier.success).toHaveBeenCalledWith("sellers.Messages.SaveSucceeded");
        });
        it('should not add seller and give error', inject(function($controller) {
            appResource.successAddSeller = false;
            SellersController = $controller('SellersController', {
                $scope: scope,
                SellerDlg: sellerDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier
            });
            scope.onAddSeller();
            expect(centrisNotifier.error).toHaveBeenCalledWith("sellers.Messages.SaveFailed");
        }));
    });
    describe("Testing edit seller", function() {
        var sellerDlgEdit = {
            show: function(object) {
                var seller = object;
                    return {
                    then: function(fn) {
                        fn(seller);
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
            centrisNotifier.success = jasmine.createSpy('success');
            centrisNotifier.error = jasmine.createSpy('error');
            SellersController = $controller('SellersController', {
                $scope: scope,
                SellerDlg: sellerDlgEdit,
                AppResource: appResource,
                centrisNotify: centrisNotifier
            });
        }));

        it('should edit product', function() {
            var seller = {
                id: 1,
                name: "Sveinn Andri",
                category: "Lögmaður",
                imagePath: "http://www.dv.is/media/cache/76/88/7688f7e8bcb3e12569d6427f39732eac.jpg"
            };
            scope.onEditSeller(seller);
            expect(centrisNotifier.success).toHaveBeenCalledWith("sellers.Messages.EditSucceeded");
        });
        it('should not edit seller and give error', inject(function($controller) {
            var seller = {
                id: 1,
                name: "Sveinn Andri",
                category: "Lögmaður",
                imagePath: "http://www.dv.is/media/cache/76/88/7688f7e8bcb3e12569d6427f39732eac.jpg"
            };
            appResource.successUpdateSeller = false;
            SellersController = $controller('SellersController', {
                $scope: scope,
                SellerDlg: sellerDlgEdit,
                AppResource: appResource,
                centrisNotify: centrisNotifier
            });
            scope.onEditSeller(seller);
            expect(centrisNotifier.error).toHaveBeenCalledWith("sellers.Messages.EditFailed");
        }));

    });
});