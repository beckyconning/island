var DirectAccessWorld = function DirectAccessWorld(callback) {
  var self = this;
  var Player = require('../../src/Player.js');
  var Song = require('../../src/Song.js');
  
  this.cleanUp(callback);
};

exports.World = DirectAccessWorld;