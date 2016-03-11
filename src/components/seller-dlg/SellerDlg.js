"use strict";

angular.module("project3App").factory("SellerDlg", 
    function SellerDlg($uibModal) {

        return {
            show: function(object) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: "components/seller-dlg/sellerDlg.html",
                    controller: "SellerDlgController",
                    resolve: {
                        currentSeller: function () {
                            return object;
                        }
                    }
                });
                return modalInstance.result;
            }
        };
});