// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'title exists': (browser) => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('h1')
      .assert.containsText('h1', 'Vue.js Code Test')
      .end();
  },
  'bar chart exists': (browser) => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('canvas#bar-chart')
      .end();
  },
  'pie chart exists': (browser) => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('canvas#pie-chart')
      .end();
  },
  'table exists': (browser) => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('table')
      .end();
  },
};
