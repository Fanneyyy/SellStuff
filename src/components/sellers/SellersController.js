"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, SellerDlg, centrisNotify) {

    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order

    $scope.sortColumns = function sortColumns(category) {
        $scope.sortType = category;
        $scope.sortReverse = !$scope.sortReverse;
    };

    AppResource.getSellers().success(function(sellers) {
        $scope.sellers = sellers;
    });

    $scope.onAddSeller = function onAddSeller() {

        SellerDlg.show().then(function(seller) {
            AppResource.addSeller(seller).success(function (seller) {
                centrisNotify.success("sellers.Messages.SaveSucceeded");
            }).error(function() {
                centrisNotify.error("sellers.Messages.SaveFailed");
            });
        }, function() {
            centrisNotify.warning("sellers.Messages.SaveCancelled");
        });
    };

    $scope.onEditSeller = function onEditSeller(s) {
        var oldSeller = $.extend({}, s);
        SellerDlg.show(oldSeller).then(function(seller) {

            AppResource.updateSeller(oldSeller.id, seller).success(function (seller) {
                centrisNotify.success("sellers.Messages.EditSucceeded");

            }).error(function() {
                centrisNotify.error("sellers.Messages.EditFailed");
            });
        }, function() {
            centrisNotify.warning("sellers.Messages.EditCancelled");
        });
    };

});