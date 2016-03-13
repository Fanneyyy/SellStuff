# WEPO Project 3

This is a starter project for the 3rd hand-in assignment in Web Programming II.
It has the following dependencies:

* node/npm
* bower (npm install -g bower)
* gulp (npm install -g gulp)
* karma/jasmine (see previous exercise)
* istanbul (npm install -g istanbul)

Install dependencies using the following commands:

* npm install
* bower install

Check out src/components/sellers, it contains most/all of the files you will
need for that particular component. Other components will have similar files
as well (most of them!)


## Project requirements

* (5%) List individuals
* (10%) Add/edit individuals
* (10%) Show details about a given individual
* (10%) All products tab
* (5%) Top 10 products tab
* (10%) Add/edit product
* (5%) All tables sortable
* (5%) All input validated
* (5%) Translated
* (5%) Toastr feedback after add/edit
* (5%) Responsive layout
* (5%) Product directive
* (20%) Unit tests for all code
* (10%) Coolness bonus

## Project UI
Assignment 3 is set up as a web application. The user can see all sellers in the project in a given table, as well as adding new sellers and editing the ones that are provided.

If a specific seller is selected, the user is brought to a new site, that holds additional information, as well as all the sellers products. The user has an option to add new products to the sellers category, as well as viewing the top10 sold products of the given seller.

## Project Implementation
The application was developed by Fanney Sigurðardóttir and Kristinn Þorri Þrastarson, as a school project. It was devoloped for the latest Google Chrome Browser using Angular.js, HTML5 and CSS, with gulp. Other dependencies are listen in the package.json file and bower.json file.

The project can be executed with `gulp`

## Testing
The application's code is all tested with unit tests using karma-jasmine. The tests are run by typing `karma-start` inside the prohject. The coverage can be found in the coverage folder after the tests have been executed.