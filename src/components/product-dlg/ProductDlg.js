"use strict";

angular.module("project3App").factory("ProductDlg", 
    function ProductDlg($uibModal) {

        return {
            show: function(object) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: "components/product-dlg/productDlg.html",
                    controller: "ProductDlgController",
                    resolve: {
                        currentProduct: function () {
                          return object;
                        }
                    }
                });

                return modalInstance.result;
            }
        };
});