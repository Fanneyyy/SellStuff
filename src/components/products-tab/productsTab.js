"use strict";

angular.module("project3App").directive('productsTab', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/products-tab/productsTab.html',
        replace: true,
        scope: {
            products: '='
        }
    };
});