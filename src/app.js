"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	});
	$translateProvider.fallbackLanguage('en');
	$translateProvider.registerAvailableLanguageKeys(['en', 'is'], {
		'en_*': 'en',
		'is_*': 'is'
	});
	// $translateProvider.useStaticFilesLoader({
	// 	prefix: "lang_",
	// 	suffix: ".json"
	// });
	$translateProvider.translations('en', {
		"sellers" : {
			"Title":                     "Sellers List",
			"Name":                      "Name",
			"Category": 				 "Category", 
			"Messages" : {
				"LoadFailed":            "Failed to load the list of sellers",
				"SaveSucceeded":         "The seller has been added successfully",
				"SaveFailed":            "Unfortunately we could not add a new seller"
			}
		}
	});
	$translateProvider.translations('is', {
		"sellers" : {
			"Title":                     "Seljendur",
			"Name":                      "Nafn",
			"Category": 				 "Flokkur", 
			"Messages" : {
				"LoadFailed":            "Ekki tókst að sækja lista yfir seljendur",
				"SaveSucceeded":         "Nýjum seljanda hefur verið bætt við",
				"SaveFailed":            "Því miður tókst ekki að bæta við nýjum seljanda"
			}
		}
	});
	$translateProvider.useSanitizeValueStrategy('escape');
	$translateProvider.preferredLanguage('en');
});
