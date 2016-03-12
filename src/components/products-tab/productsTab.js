"use strict";

angular.module("project3App").directive('productsTab', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'components/products-tab/productsTab.html',
        transclude: true,
        scope: {
            products: '='
        }
    };
});