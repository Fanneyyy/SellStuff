"use strict";
describe('SellerDlgController should be unit tested here', function () {
 
	var mockSeller = {
		id: 1,
		name: 'Sveinn Andri',
		category: 'Grænmeti',
		imagePath: 'http://www.visindavefur.is/myndir/graenmeti_030308.jpg'
	};

  	beforeEach(module('project3App'));
  	beforeEach(module(function ($provide) {
    	$provide.value('oneOfMyOtherServicesStub', {
        	someVariable: 1
    	});
  	}));

  	it('can get an instance of SellerDlg', inject(function(SellerDlg) {
    	expect(SellerDlg).toBeDefined();
  	}));

  	it('SellerDlg.show should be defined', inject(function(SellerDlg) {
  		SellerDlg.show(mockSeller);
  		expect(SellerDlg).toBeDefined();
  	}));
});