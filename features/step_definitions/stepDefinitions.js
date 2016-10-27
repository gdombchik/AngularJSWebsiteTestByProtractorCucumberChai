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
        browser.get('http://angularjs.org');
        callback();
    });

    this.When(/^I confirm I am on the AngularJS website home page\.$/, function (table,callback) {
        expect(homePage.downLoadAngularJSOneButton.getText()).to.eventually.equal(table.rowsHash()[ 'DownLoad Angular JS One Button' ]); //Download AngularJS 1\n\n(1.5.8 / 1.2.30)
        //expect(homePage.downLoadAngularJSOneButton.getText()).to.eventually.equal(table.rows()[0][1]); //Download AngularJS 1\n\n(1.5.8 / 1.2.30)
        callback();
    });
};
