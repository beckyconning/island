var DirectAccessWorld = function DirectAccessWorld(callback) {
  var self = this;
  Player = require('../../src/Player.js');
  Song = require('../../src/Song.js');
    
  callback();
};

exports.World = DirectAccessWorld;