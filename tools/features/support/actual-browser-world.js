var ActualBrowserWorld = function ActualBrowserWorld(callback) {
  var LOG_FILE       = __dirname + '../../log/cucumber-tools.log';
  var SELENIUM_SPEED = 1000; // ms

  var fs       = require('fs');
  var selenium = require('selenium-launcher');
  var soda     = require('soda');

  var self = this;

  var withSelenium = function (callback) {
    if (global._seleniumInstance) {
      callback(null, global._seleniumInstance);
    } else {
      selenium(function (err, selenium) {
        global._seleniumInstance = selenium;
        process.on('exit', function() {
          selenium.kill();
        });
        callback(null, selenium);
      });
    }
  };

  var init = function () {
    //var logFile  = fs.createWriteStream(LOG_FILE, {flags: 'a'});
    
    withSelenium(function(err, selenium) {
      self.browser = soda.createClient({
        host: selenium.host,
        port: selenium.port,
        url:  "http://localhost/~becky/island",
        browser: '*chrome'
      });

      self.browser.setSpeed(SELENIUM_SPEED, function(err) {
        self.browser.session(function(err) {
          callback();
        });
      });
    })
  };

  init();
};

// Domain Specific Language Helpers:

objectEditorURL = 'http://localhost/~becky/island/tools/object-editor/index.html';

stepComplete = function(callback) {
  return function(err) {
    if(err) { callback.fail(err); }
    else    { callback(); }
  };
}

// Domain Specific Language:
ActualBrowserWorld.prototype.openObjectEditor = function (callback) {
  var self = this;
  self.browser
    .chain
    .open(objectEditorURL)
    .assertTitle("*Object Editor")
    .end(function(err) { stepComplete(callback)(err) });
};

ActualBrowserWorld.prototype.supplyAnImage = function(callback) {
  var self = this;
  self.browser
    .chain
    .focus("name=file")
    .type("name=file", "/Users/becky/Sites/island/tools/fixtures/mr-fox.png")
    .assertValue("name=file", "mr-fox.png")
    .end(function(err) { stepComplete(callback)(err) });
}

exports.World = ActualBrowserWorld;