"use strict";

angular.module("project3App").controller("HeaderController",
function HeaderController($scope, $translate) {

	$scope.changeLanguage = function changeLanguage(key) {
		$translate.use(key);
	};
});