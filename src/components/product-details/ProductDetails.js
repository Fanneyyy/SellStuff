"use strict";

angular.module("project3App").factory("ProductDetails", 
	function ProductDetails($uibModal) {

		return {
			show: function(object) {
				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: "components/product-details/productDetails.html",
					controller: "ProductDetailsController",
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