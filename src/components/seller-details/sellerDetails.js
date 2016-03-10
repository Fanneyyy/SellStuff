"use strict";

angular.module("project3App").directive('sellerDetails', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/seller-details/sellerDetails.html',
        replace: true,
        scope: {
            name: '@',
            category: '@',
            image: '@'
        }
    };
});