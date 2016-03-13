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
Assignment 3 is set up as a web application. The top banner has the option of switching languages. Should apply to all hardcoded text, i.e. not data, including placeholder text, notify alerts and input validation messages.
The user can see all sellers in the project in a given table, the table is sortable by pressing either name or category and pressing again will reverse the order, as well as adding new sellers and editing the ones that are provided. To add a new seller the user can press the plus button to open a form which has all fields required, the name with a 40 letter limit and the category with 20 letter limit. The image must also be an url. To edit a seller the user can press the edit button at the end of the sellers line. The same form will appear but has already been filled with the current information.

If a specific seller is selected, the user is brought to a new site, that holds additional information, i.e. only the photo is additional, as well as all the sellers products. The user has an option to add new products to the sellers category, as well as viewing the top10 sold products of the given seller. The user can also click on a product, indicated by the hover affect, and get a larger view of the product, with a tab option to edit the product. The form for adding and editing a product has the name required, with a 20 letter maximum, the price is also required and can only contain a number. The in stock and quantity sold are an option but not required. The photo is required and must be an url.

## Project Implementation
The application was developed by Fanney Sigurðardóttir and Kristinn Þorri Þrastarson, as a school project. It was developed for the latest Google Chrome Browser using Angular.js, HTML5 and CSS, with gulp. Other dependencies are listen in the package.json file and bower.json file.

The project can be executed with `gulp`

## Testing
The application's code is all tested with unit tests using karma-jasmine. The tests are run by typing `karma-start` inside the project. The coverage can be found in the coverage folder after the tests have been executed.