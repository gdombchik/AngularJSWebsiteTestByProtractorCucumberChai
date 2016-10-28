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
        browser.get('http://angularjs.org').then(callback);
    });

    this.When(/^I confirm I am on the AngularJS website home page\.$/, function (table,callback) {
        expect(homePage.downLoadAngularJSOneButton.getText()).to.eventually.equal(table.rowsHash()[ 'DownLoad Angular JS One Button' ]); //Download AngularJS 1\n\n(1.5.8 / 1.2.30)
        expect(homePage.downLoadAngularJSOneButton.getText()).to.eventually.equal(table.rows()[0][1]).and.notify(callback); //Download AngularJS 1\n\n(1.5.8 / 1.2.30)
    });

    this.Then(/^I click on the Download AngularJS One button\.$/, function (callback) {
        downloadAngularJSOnePage = homePage.clickDownloadAngularJSOnePage();
        callback();
    });

    this.Then(/^I check the properties of the Download AngularJS One page\.$/, function (table, callback) {
        //check the properties of the DownloadAngularJSOnePage
        expect(downloadAngularJSOnePage.titleLabel.getText()).to.eventually.equal('Download AngularJS1');
        expect(downloadAngularJSOnePage.branch.getText()).to.eventually.equal('1.5.x (stable)');
        expect(downloadAngularJSOnePage.buildMinified.getText()).to.eventually.equal('Minified');
        expect(downloadAngularJSOnePage.buildUncompressed.getText()).to.eventually.equal('Uncompressed');
        expect(downloadAngularJSOnePage.buildZip.getText()).to.eventually.equal('Zip');
        expect(downloadAngularJSOnePage.cdn.getAttribute('value')).to.eventually.contain('angular.min.js').and.notify(callback);

        //which build button has been selected
        //expect(downloadAngularJSOnePage.buildMinified.getAttribute('class')).toContain('active'); //selected
        //expect(downloadAngularJSOnePage.buildUncompressed.getAttribute('class')).not.toContain('active'); //not selected
        //expect(downloadAngularJSOnePage.buildZip.getAttribute('class')).not.toContain('active'); //not selected

        //expect(downloadAngularJSOnePage.getBower()).toContain('bower');
        //expect(downloadAngularJSOnePage.getNpm()).toContain('npm');
        //expect(downloadAngularJSOnePage.extras.getText()).toEqual('Browse additional modules');
        //expect(downloadAngularJSOnePage.previousVersions.getText()).toEqual('Previous Versions');
        //expect(downloadAngularJSOnePage.getDownloadButton()).toContain('angular.min.js');

        //assert.isOk(false, 'this will fail');

        //callback();
    });

    this.Then(/^I click on the Close button of the Download AngularJS One page\.$/, function (callback) {
        callback();
    });
};
