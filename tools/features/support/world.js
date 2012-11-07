var worldType = process.env.WORLD_TYPE || 'direct_access';

exports.World = require('./' + worldType + '-world').World;