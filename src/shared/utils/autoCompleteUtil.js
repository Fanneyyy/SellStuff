"use strict";

angular.module("project3App").factory('autoCompleteUtil', function() {
	return {
		autocompleteOptions: [
			{category: 'Fatnaður'},
			{category: 'Skartgripir'},
			{category: 'Matvörur'},
			{category: 'Keramik'}
		],
		add: function add(category) {
			this.autocompleteOptions.push({category: category});
		},
		get: function get() {
			return this.autocompleteOptions;
		}
	};
});