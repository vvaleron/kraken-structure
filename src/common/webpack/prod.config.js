const path = require('path');
const devConfig = require('./dev.config.js');

const config = Object.assign({}, devConfig, {
  entry: [
    path.join(__dirname, './../../frontend/app/main.js'),
  ],
});

module.exports = config;
