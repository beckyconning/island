var playerHooks = function () {
  this.Before(function(callback) {
    console.log("lal");


    // Don't forget to tell Cucumber when you're done:
    callback();
  });
};

module.exports = playerHooks;