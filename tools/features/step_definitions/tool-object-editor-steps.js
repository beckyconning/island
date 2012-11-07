var objectToolSteps = function() {
  this.World = require("../support/world").World;
  
  this.When(/^I open the editor$/, function(callback) {
    this.openObjectEditor(callback);
  });

  this.When(/^supply an image$/, function(callback) {
    this.supplyAnImage(callback);
    //callback.pending();
  });

  this.When(/^supply a polygon which defines the object's edge$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });
  
  this.Then(/^I should see the properties I have defined in the appropriate formats$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });
};

// Node.js:
if (typeof(module) !== 'undefined') { module.exports = objectToolSteps; }
