"use strict";

describe("SellerDetailsController should be unit tested here", function() {
// $scope, AppResource, ProductDlg, $routeParams, centrisNotify
    var SellerDetailsController, scope, mockSeller, mockProduct, appResource, productDlg, routeParams, centrisNotifier;
    routeParams = {
            sellerid: 1
        };
    describe("Testing getSellerDetails and product", function() {
        centrisNotifier = {
        };
        beforeEach(module("project3App"));
        beforeEach(inject(function ($rootScope, $injector, $controller) {
            scope = $rootScope.$new();
            appResource = $injector.get('AppResource');
            centrisNotifier.success = jasmine.createSpy('success');
            centrisNotifier.error = jasmine.createSpy('error');
            
        }));
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
        it("Should not get details from seller that is not available", inject(function($controller) {
            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier,
                $routeParams: routeParams
            });
            var promise = appResource.getSellerDetails(9999);
            expect(promise.success().error).toBeDefined();
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

        it("Should give error on not getting details from seller", inject(function($controller) {
            appResource.successLoadSellerDetails = false;
            centrisNotifier.error = jasmine.createSpy('error');

            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier,
                $routeParams: routeParams
            });
            expect(centrisNotifier.error).toHaveBeenCalledWith("sellerDetails.Messages.DetailsFailed");
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
            expect(centrisNotifier.error).toHaveBeenCalledWith("sellerDetails.Messages.ProductsFailed");
        }));
    });

    describe("Testing added products", function() {
        centrisNotifier = {
        };
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
            appResource.getSellerProducts(1).success(function(details) {
                mockProduct = details[0];
            });
            centrisNotifier.success = jasmine.createSpy('success');
            centrisNotifier.error = jasmine.createSpy('error');
            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier,
                $routeParams: routeParams
            });
        }));
        it('should add product', function() {
            productDlg.addProduct(mockProduct);
            scope.sellerId = 1;
            scope.onAddProduct();
            expect(centrisNotifier.success).toHaveBeenCalledWith("productDlg.Messages.SaveSucceeded");
        });
        it('should add product with undefined quantityInStock & quantitySold', function() {
            var tempProduct = mockProduct;
            tempProduct.quantityInStock = undefined;
            tempProduct.quantitySold = undefined;
            productDlg.addProduct(tempProduct);
            scope.sellerId = 1;
            scope.onAddProduct();
            expect(centrisNotifier.success).toHaveBeenCalledWith("productDlg.Messages.SaveSucceeded");
        });
        it('should not add product and give error', inject(function($controller) {
            appResource.successAddSellerProduct = false;
            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlg,
                AppResource: appResource,
                centrisNotify: centrisNotifier,
                $routeParams: routeParams
            });
            scope.onAddProduct();
            expect(centrisNotifier.error).toHaveBeenCalledWith("productDlg.Messages.SaveFailed");
        }));
    });
    describe("Testing edit products", function() {
        var productDlgEdit;
        centrisNotifier = {
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
                centrisNotify: centrisNotifier,
                $routeParams: routeParams
            });
        }));
        it('should edit product', function() {
            appResource.getSellerProducts(1).success(function(details) {
                scope.products = details;
            });
            var tempProduct = mockProduct;            
            scope.onViewProduct(tempProduct);
            expect(centrisNotifier.success).toHaveBeenCalledWith("productDlg.Messages.EditSucceeded");

        });
        it('should not edit product and give error', inject(function($controller) {
            appResource.successUpdateSellerProduct = false;
            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: productDlgEdit,
                AppResource: appResource,
                centrisNotify: centrisNotifier,
                $routeParams: routeParams
            });
            var tempProduct = mockProduct;
            scope.onViewProduct(tempProduct);
            expect(centrisNotifier.error).toHaveBeenCalledWith("productDlg.Messages.EditFailed");
        }));
        /*
        it('should cancel the edited product', inject(function($controller, $injector) {
            var pModal = $injector.get('ProductDlg');

            SellerDetailsController = $controller('SellerDetailsController', {
                $scope: scope,
                ProductDlg: pModal,
                AppResource: appResource,
                centrisNotify: centrisNotifier,
                $routeParams: routeParams
            });
        }));
*/

    });
});