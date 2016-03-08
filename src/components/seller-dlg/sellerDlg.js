"use strict";

angular.module("project3App").factory("SellerDlg", 
	function SellerDlg($uibModal) {

		return {
			show: function() {
				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: "components/seller-dlg/sellerDlg.html",
					controller: "SellerDlgController"
				});
				return modalInstance.result;
			}
		};
});