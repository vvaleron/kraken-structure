const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '/../../frontend/admin-panel/index.html'),
    inject: 'body',
    filename: 'index.html',
  }),
];

module.exports = plugins;
