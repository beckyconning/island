module.exports = function () {
  var worldType = process.env.WORLD_TYPE || 'direct_access_world';
  this.World = require('./' + worldType + '_world').World;
};