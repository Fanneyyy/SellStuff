"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, currentSeller, $translate) {

    $scope.hasSubmitted = false;

    if (currentSeller) {
        $scope.newSeller = currentSeller;
        $scope.message = $translate.instant("sellerDlg.TitleEdit");
    } else {
        $scope.message = $translate.instant("sellerDlg.TitleAdd");
    }

    $scope.onOk = function onOk() {
        // TODO: Validation
        $scope.$close($scope.newSeller);
    };

    $scope.onCancel = function onCancel() {
        $scope.$dismiss('cancel');
    };

    $scope.validate = function validate() {
        $scope.hasSubmitted = true;
    };

});