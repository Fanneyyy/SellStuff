"use strict";

describe("SellerDetailsController should be unit tested here", function() {
// $scope, AppResource, ProductDlg, $routeParams, centrisNotify
    var SellerDetailsController, scope, mockSeller, mockProduct, appResource, productDlg, routeParams, centrisNotifier;

    centrisNotifier = {
    };

    describe("Testing getSellerDetails and product", function() {
        beforeEach(module("project3App"));
        beforeEach(inject(function ($rootScope, $injector, $controller) {
            scope = $rootScope.$new();
            appResource = $injector.get('AppResource');
            centrisNotifier.success = jasmine.createSpy('success');
            centrisNotifier.error = jasmine.createSpy('error');
            
        }));
        routeParams = {
            sellerid: 1
        };

        it("Should get details from seller with id 1", inject(function($controller) {
            
            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier,
                $routeParams: routeParams
            });
            var tempSeller;
            appResource.getSellerDetails(1).success(function(details) {
                tempSeller = details;
            });
            expect(scope.sellerDetails).toEqual(tempSeller);
        }));

        it("Should get products from seller with id 1", inject(function($controller) {
            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier,
                $routeParams: routeParams
            });
            var tempProducts;
            appResource.getSellerProducts(1).success(function(details) {
                tempProducts = details;
            });
            expect(scope.products).toEqual(tempProducts);
        }));

        it("Should give error on not getting products from seller", inject(function($controller) {
            appResource.successGetSellerProducts = false;
            centrisNotifier.error = jasmine.createSpy('error');

            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier,
                $routeParams: routeParams
            });
            expect(centrisNotifier.error).toHaveBeenCalledWith("Error while getting products from the seller.");
        }));

    });

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
            centrisNotifier.success = jasmine.createSpy('success');
            centrisNotifier.error = jasmine.createSpy('error');
            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier
            });
        }));

        it('should add product', function() {
            productDlg.addProduct(mockProduct);
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
    describe("Testing edit products", function() {
        var productDlgEdit;
        
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
            productDlgEdit = {
                show: function(object) {
                    var product = object;
                    return {
                        then: function(fn) {
                            fn(product);
                        }
                    };
                }
            };
            centrisNotifier.success = jasmine.createSpy('success');
            centrisNotifier.error = jasmine.createSpy('error');
            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlgEdit,
                AppResource: appResource,
                centrisNotify: centrisNotifier
            });
        }));
        it('should edit product', function() {
            var product = {
                id: 1,
                product: {
                    id: 1,
                    name: "Gúrkur",
                    price: "699",
                    quantitySold: "100",
                    quantityInStock: "100",
                    imagePath: "http://i.livescience.com/images/i/000/076/219/iFF/cucumbers.jpg"
                }
            };
            /*
            scope.sellerId = 1;
            scope.onViewProduct(mockProduct);
            expect(centrisNotifier.success).toHaveBeenCalledWith("productDlg.Messages.EditSucceeded");
            */
        });

    });
});