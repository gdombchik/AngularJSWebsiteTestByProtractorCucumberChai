'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

    var homePage = require('../../pageObjects/homePage.js');
    var downloadAngularJSOnePage = require('../../pageObjects/downloadAngularJSOnePage.js');
    var theBasics = require('../../pageObjects/theBasics.js');
    var addSomeControl = require('../../pageObjects/addSomeControl.js');
    var wireUpABackend = require('../../pageObjects/wireUpABackend.js');
    var createComponents = require('../../pageObjects/createComponents.js');

    this.Given(/^I am on the AngularJS website home page\.$/, function (callback) {
        //Execute Before Each Scenario
        browser.get('http://angularjs.org');

        callback();
    });

    this.When(/^I confirm I am on the AngularJS website home page\.$/, function (table,callback) {
        expect(homePage.downLoadAngularJSOneButton.getText()).to.eventually.equal(table.rowsHash()[ 'DownLoad Angular JS One Button' ]); //Download AngularJS 1\n\n(1.5.8 / 1.2.30)
        expect(homePage.downLoadAngularJSOneButton.getText()).to.eventually.equal(table.rows()[0][1]); //Download AngularJS 1\n\n(1.5.8 / 1.2.30)

        callback();
    });

    this.Then(/^I click on the Download AngularJS One button\.$/, function (callback) {
        downloadAngularJSOnePage = homePage.clickDownloadAngularJSOnePage();

        callback();
    });

    this.Then(/^I check the properties of the Download AngularJS One page\.$/, function (table, callback) {
        //check the properties of the DownloadAngularJSOnePage
        browser.wait(downloadAngularJSOnePage.titleLabel.getText()).isPresent;
        expect(downloadAngularJSOnePage.titleLabel.getText()).to.eventually.equal('Download AngularJS');
        expect(downloadAngularJSOnePage.branch.getText()).to.eventually.equal('1.6.x (latest)');
        expect(downloadAngularJSOnePage.buildMinified.getText()).to.eventually.equal('Minified');
        expect(downloadAngularJSOnePage.buildUncompressed.getText()).to.eventually.equal('Uncompressed');
        expect(downloadAngularJSOnePage.buildZip.getText()).to.eventually.equal('Zip');
        expect(downloadAngularJSOnePage.cdn.getAttribute('value')).to.eventually.contain('angular.min.js');

        //which build button has been selected
        expect(downloadAngularJSOnePage.buildMinified.getAttribute('class')).to.eventually.contain('active'); //selected
        expect(downloadAngularJSOnePage.buildUncompressed.getAttribute('class')).to.not.eventually.contain('active');  //not selected
        expect(downloadAngularJSOnePage.buildZip.getAttribute('class')).to.not.eventually.contain('active');  //not selected

        expect(downloadAngularJSOnePage.getBower()).to.eventually.contain('bower');
        expect(downloadAngularJSOnePage.getNpm()).to.eventually.contain('npm');
        expect(downloadAngularJSOnePage.extras.getText()).to.eventually.equal('Browse additional modules');
        expect(downloadAngularJSOnePage.previousVersions.getText()).to.eventually.equal('Previous Versions');
        expect(downloadAngularJSOnePage.getDownloadButton()).to.eventually.contain('angular.min.js');

        callback();
    });

    this.Then(/^I click on the Close button of the Download AngularJS One page\.$/, function (callback) {
        browser.wait(downloadAngularJSOnePage.getCloseButton()).isPresent;
        var closeButton = downloadAngularJSOnePage.getCloseButton();
        expect(closeButton.getText()).to.eventually.equal('×');
        closeButton.click();
        expect(homePage.tryTheNewAngularTwoButton.getText()).to.eventually.equal('Design Docs & Notes');

        callback();
    });

    this.When(/^I fill in the name\.$/, function (table, callback) {
        theBasics = homePage.getTheBasics();
        theBasics.setName(table.rowsHash()[ 'Name' ]);

        callback();
    });

    this.Then(/^I confirm the message\.$/, function (table, callback) {
        expect(theBasics.getName()).to.eventually.equal(table.rowsHash()[ 'Name Message' ]);

        callback();
    });

    this.When(/^I confirm the labels of the current todo items\.$/, function (table, callback) {
        addSomeControl = homePage.getAddSomeControl();

        //initial todo count
        expect(addSomeControl.todoList.count()).to.eventually.equal(2);

        //current todo values
        addSomeControl.todoList.each(function (element, index) {
            element.getText().then(function (text) {
                expect(table.rows()[index][1]).to.equal(text);
            });
        });

        callback();
    });

    this.Then(/^I confirm the todo checkboxes that are selected\.$/, function (table, callback) {
        //todos checkbox selected
        addSomeControl.todoListChecked.each(function (element, index) {
            element.getText().then(function (text) {
                expect(table.rows()[index][1]).to.equal(text); //learn angular
            });
        });

        callback();
    });

    this.Then(/^I confirm the todo checkboxes that are not selected\.$/, function (table, callback) {
        //todos checkbox not selected
        addSomeControl.todoListNotChecked.each(function (element, index) {
            element.getText().then(function (text) {
                expect(table.rows()[index][1]).to.equal(text); //build an angular app
            });
        });

        callback();
    });

    this.Then(/^I add a new todo item\.$/, function (table, callback) {
        addSomeControl.addNewTodo(table.rows()[0][1]);
        addSomeControl.addButton().click(); //click the add button to add the new todo value

        expect(addSomeControl.todoList.count()).to.eventually.equal(3);  //todo count has increased to three

        callback();
    });

    this.Then(/^I check the values of the todo items\.$/, function (table, callback) {
        addSomeControl.todoList.each(function (element, index) {
            element.getText().then(function (text) {
                expect(table.rows()[index][1]).to.equal(text);
            });
        });

        callback();
    });

    this.Then(/^I select the check box of the new todo item\.$/, function (table, callback) {
        addSomeControl.todoList.each(function (element, index) { //recheck the checkbox not selected values
            element.getText().then(function (text) {
                if(text == table.rowsHash()[ 'New Todo List Item' ]){
                    addSomeControl.checkBoxes.get(index).click(); //check the 'Go to the dentist' checkbox
                }
            });
        });

        callback();
    });

    this.Then(/^I recheck the value of the todo items\.$/, function (table, callback) {
        addSomeControl.todoListChecked.each(function (element, index) {
            element.getText().then(function (text) {
                expect(table.rows()[index][1]).to.equal(text); //'learn angular' and 'Go to the dentist'
            });
        });

        callback();
    });

    this.When(/^I confirm the labels of the current JavaScript Projects\.$/, function (table, callback) {
        //need to wait for element.all to become available
        browser.wait(presenceOfAll(wireUpABackend.getJavaScriptProjects()), 10000);

        wireUpABackend.getJavaScriptProjects().each(function (element, index) {
            element.getText().then(function (text) {
                expect(table.rows()[index][1]).to.equal(text);
            });
        });

        callback();
    });

    this.Then(/^I confirm the labels of the current JavaScript Project Descriptions\.$/, function (table, callback) {
        wireUpABackend.getJavaScriptProjectDescriptions().each(function (element, index) {
            element.getText().then(function (text) {
                expect(table.rows()[index][1]).to.equal(text);
            });
        });

        callback();
    });

    this.Then(/^Search for, update, and confirm a project values\.$/, function (table, callback) {
        //Enter GWT in the Search Input Box
        wireUpABackend.searchInput.sendKeys(table.rowsHash()[ 'GWT_Current_Name' ]);

        //browser.pause();
        browser.sleep(10000); //todo:  It takes a while to filter the search input.  Will clean this up.

        wireUpABackend.getJavaScriptProjectEditLinks().each(function (element, index) { element.click(); });

        //Clear and Update the Project Name, Website, and Description Input Boxes
        wireUpABackend.editJavaScriptProjectName.clear();
        wireUpABackend.editJavaScriptProjectWebsite.clear();
        wireUpABackend.editJavaScriptProjectDescription.clear();

        wireUpABackend.editJavaScriptProjectName.sendKeys(table.rowsHash()[ 'GWT_Updated_Name' ]);
        wireUpABackend.editJavaScriptProjectWebsite.sendKeys(table.rowsHash()[ 'GWT_Updated_Website' ]);
        wireUpABackend.editJavaScriptProjectDescription.sendKeys(table.rowsHash()[ 'GWT_Updated_Description' ]);

        //Click the Save Button
        wireUpABackend.saveButton.click();

        browser.sleep(10000);

        //Search for Updated GWT Project Name
        wireUpABackend.searchInput.sendKeys(table.rowsHash()[ 'GWT_Updated_Name' ]);

        //Confirm JavaScript Project labels has been updated
        expect(wireUpABackend.getJavaScriptProjects().get(0).getText()).to.eventually.equal(table.rowsHash()[ 'GWT_Updated_Name' ]);
        expect(wireUpABackend.getJavaScriptProjects().get(0).getAttribute('href')).to.eventually.equal(table.rowsHash()[ 'GWT_Updated_Website' ]);
        expect(wireUpABackend.getJavaScriptProjectDescriptions().get(0).getText()).to.eventually.equal(table.rowsHash()[ 'GWT_Updated_Description' ]);

        callback();
    });

    this.When(/^I confirm the locales\.$/, function (table, callback) {
        createComponents.getLocales().each(function (element, index) {
            element.getText().then(function (text) {
                expect(table.rows()[index][1]).to.equal(text);
            });
        });

        callback();
    });

    this.Then(/^I confirm the localization values for United States\.$/, function (table, callback) {
        createComponents.getUnitedStatesLocalization().each(function (element, index) {
            element.getText().then(function (text) {
                expect(table.rows()[index][1]).to.equal(text);
            });
        });

        callback();
    });

    this.Then(/^I confirm the pluralization values for United States\.$/, function (table, callback) {
        createComponents.getUnitedStatesPluralization().each(function (element, index) {
            element.getAttribute('innerHTML').then(function (text) {
                expect(table.rows()[index][1]).to.equal(text);
            });
        });

        callback();
    });

    this.Then(/^I confirm the localization values for Slovakia\.$/, function (table, callback) {
        createComponents.getSlovakiaLocalization().each(function (element, index) {
            element.getText().then(function (text) {
                expect(table.rows()[index][1]).to.equal(text);
            });
        });

        callback();
    });

    this.Then(/^I confirm the pluralization values for Slovakia\.$/, function (table, callback) {
        createComponents.getSlovakiaPluralization().each(function (element, index) {
            element.getAttribute('innerHTML').then(function (text) {
                expect(table.rows()[index][1]).to.equal(text);
            });
        });

        callback();
    });

    //http://stackoverflow.com/questions/34289029/protractor-wait-doesnt-work-with-element-all
    function presenceOfAll(elementArrayFinder) {
        return function () {
            return elementArrayFinder.count(function (count) {
                return count > 0;
            });
        };
    }
};
