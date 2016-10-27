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
        // Write code here that turns the phrase above into concrete actions
        browser.get('http://angularjs.org');
        //console.log(homePage.downLoadAngularJSOneButton.getText());
        element(by.model('yourName')).sendKeys('fasdfasdf');
        element(by.binding('yourName')).getText().then(function (text){
           console.log('your name --> ' + text);
        });

        element(by.css('.btn.btn-large.btn-primary.download-btn')).getText().then(function (text){
            console.log('downLoadAngularJSOneButton --> ' + text);
        });

        homePage.downLoadAngularJSOneButton.getText().then(function (text){
            console.log('downLoadAngularJSOneButtonhomepage --> ' + text);
        });









        //console.log('in given')
        //callback(null, 'pending');
        //.then(callback);
        callback();
    });


    this.When(/^I confirm I am on the AngularJS website home page\.$/, function (table,callback) {
        // Write code here that turns the phrase above into concrete actions
        //console.log('in when').then(callback);
        console.log('in when');
        //callback();
        element(by.model('todoList.todoText')).sendKeys('Be Awesome');
        var el = element(by.css('[value="add"]'));
        el.click();
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).to.eventually.equal(3);
        //expect(todoList.get(2).getText()).to.eventually.equal('Be Awesome')
        //    .and.notify(callback);

        expect(todoList.get(2).getText()).to.eventually.equal('Be Awesome');

        //console.log("table length --> " + table.rows().length);
        //console.log("table length --> " + table.hashes().length);

        //console.log("table length --> " + table.rows()[0][0]);

        for(var i=0; i < table.rows().length;i++){
            console.log("table key --> " + table.rows()[i][0]); //key
            console.log("table value --> " + table.rows()[i][1]); //value
        }


        callback();

    });




};
