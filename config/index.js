const config = require(`./${process.env.NODE_ENV || 'local'}`);
module.exports = config;