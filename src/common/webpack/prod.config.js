const path = require('path');
const devConfig = require('./dev.config.js');

const config = Object.assign({}, devConfig, {
  entry: [
    path.join(__dirname, './../../frontend/admin-panel/main.js'),
  ],
});

module.exports = config;
