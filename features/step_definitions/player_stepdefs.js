var playerStepDefs = function() {
  this.World = require("../support/world").World;
  this.Given(/^the player isn't playing the specified song$/, function(callback) {
    player = new Player();
    player.pause();
    callback();
  });
  
  this.When(/^I play the specified song$/, function(callback) {
    song = new Song();
    player.play(song);
    callback();
  });
  
  this.Then(/^the specified song should be playing$/, function(callback) {
    var playerIsPlayingCorrectSong = player.currentlyPlayingSong == song;
    if(player.isPlaying && playerIsPlayingCorrectSong) { callback(); }
    else { callback.fail(new Error("The specified song should be playing.")); }
  });
};

// Node.js:
if (typeof(module) !== 'undefined')
  module.exports = playerStepDefs;
