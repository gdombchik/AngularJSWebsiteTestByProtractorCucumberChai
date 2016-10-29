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
        expect(downloadAngularJSOnePage.branch.getText()).to.eventually.equal('1.5.x (stable)');
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
        expect(theBasics.getName()).to.eventually.equal('Hello Greg!');
        callback();
    });
};
