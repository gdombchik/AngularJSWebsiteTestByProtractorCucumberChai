// conf.js
exports.config = {
    sauceUser: 'gdombchik',
    sauceKey: 'aaedc48d-3e62-452e-8704-09d50799b58e',

    //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'features/*.feature'
    ],



    // restartBrowserBetweenTests: true,

    onPrepare: function(){
        var caps = browser.getCapabilities()
    },

    multiCapabilities: [{
        browserName: 'firefox',
        version: '32',
        platform: 'OS X 10.10',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'chrome',
        version: '41',
        platform: 'Windows 7',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25
    }],

    resultJsonOutputFile: 'report.json',



    cucumberOpts: {
        require: 'features/step_definitions/stepDefinitions.js',
        format: 'pretty'
    },

    onComplete: function() {

        var printSessionId = function(jobName){
            browser.getSession().then(function(session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId("Insert Job Name Here");
    }
}
