//protractor.conf.js
exports.config = {
  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  seleniumServerJar: './selenium_server_standalone/selenium-server-standalone-2.53.1.jar',

  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    //'browserName': 'firefox'
    'browserName': 'phantomjs'
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  //baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: 'features/step_definitions/stepDefinitions.js',
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  }
};