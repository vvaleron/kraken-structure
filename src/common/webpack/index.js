const prod = require('./prod.config');
const dev = require('./dev.config');

module.exports = {
  config: {
    prod,
    dev
  }
};

// todo: inject webpack image loader
