"use strict";

describe("SellerDetailsController should be unit tested here", function() {
// $scope, AppResource, ProductDlg, $routeParams, centrisNotify
    var SellerDetailsController, scope, mockSeller, mockProduct, appResource, productDlg, routeParams, centrisNotifier;

    centrisNotifier = {
        success: function(msg) {
        },
        error: function(msg) {

        },
        warning: function(msg) {

        }
    };

    beforeEach(module("project3App"));


    describe("Testing added products", function() {
        productDlg = {
            addProduct: function(mockProduct) {
                this.product = mockProduct;
            },
            show: function() {
                var product = this.product;
                return {
                    then: function(fn) {
                        fn(product);
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
            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier
            });
            spyOn(centrisNotifier, "success");
            spyOn(centrisNotifier, "error");
            spyOn(centrisNotifier, "warning");
        }));

        it('should add product', function() {
            scope.onAddProduct();
            expect(centrisNotifier.success).toHaveBeenCalledWith("productDlg.Messages.SaveSucceeded");
        });
        it('should not add product and give error', inject(function($controller) {
            appResource.successAddSellerProduct = false;
            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier
            });
            scope.onAddProduct();
            expect(centrisNotifier.error).toHaveBeenCalledWith("productDlg.Messages.SaveFailed");
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