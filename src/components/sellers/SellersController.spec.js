"use strict";

describe("SellersController should be unit tested here", function() {
// $scope, AppResource, SellerDlg, centrisNotify
    var SellersController, scope, mockSeller, appResource, sellerDlg, centrisNotifier;

    centrisNotifier = {
        success: function(msg) {
        },
        error: function(msg) {
        },
        warning: function(msg) {
        }
    };
    describe("Testing sort", function() {
        beforeEach(module("project3App"));
        beforeEach(inject(function ($rootScope, $injector, $controller) {
            scope = $rootScope.$new();
            appResource = $injector.get('AppResource');
            appResource.getSellerDetails(1).success(function(details) {
                mockSeller = details;
            });
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
        })
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
            SellersController = $controller('SellersController', {
                $scope: scope,
                SellerDlg: sellerDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier
            });
            spyOn(centrisNotifier, "success");
            spyOn(centrisNotifier, "error");
            spyOn(centrisNotifier, "warning");
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
    // describe("Testing edit products", inject(function($controller) {

        
    //     beforeEach(module("project3App"));
    //     beforeEach(inject(function ($rootScope, $injector, $controller) {
    //         scope = $rootScope.$new();
    //         appResource = $injector.get('AppResource');
    //         appResource.getSellerDetails(1).success(function(details) {
    //             mockSeller = details;
    //         });
    //         appResource.updateSellerProduct = function(sellerId, oldProductId, newProduct) {
    //             return {
    //                 success: function(product) {
    //                     var current;
    //                     current.name            = "Svenni";
    //                     current.price           = "133";
    //                     current.quantitySold    = "1337";
    //                     current.quantityInStock = "13";
    //                     current.imagePath       = "test";
    //                 }
    //             };
    //         };
    //         appResource.getSellerProducts(1).success(function(details) {
    //             mockProduct = details[0];
    //         });
    //         productDlg = {
    //             show: function(object) {
    //                 var product = object;
    //                 return {
    //                     then: function(fn) {
    //                         fn(product);
    //                     }
    //                 };
    //             }
    //         };
    //         SellerDetailsController = $controller('SellerDetailsController', {
    //             $scope: scope,
    //             ProductDlg: productDlg,
    //             AppResource: appResource,
    //             centrisNotify: centrisNotifier
    //         });
    //         spyOn(centrisNotifier, "success");
    //         spyOn(centrisNotifier, "error");
    //         spyOn(centrisNotifier, "warning");
    //     }));
    //     it('should edit product', function() {
    //         var product = {
    //             name: "Svenni",
    //             price: "1337",
    //             quantitySold: "130",
    //             quantityInStock: "90",
    //             imagePath: "http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg"
    //         };
    //         scope.onEditProduct(product);
    //         expect(centrisNotifier.success).toHaveBeenCalledWith("productDlg.Messages.EditSucceeded");
    //     });

    // }));
});