const path = require('path');
const webpack = require('webpack');
const commonPlugins = require('./common.plugins');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
];

const config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './../../frontend/app/src/main.js'),
  ],
  output: {
    path: path.join(__dirname, '/../../../build/'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: plugins.concat(commonPlugins),
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.jsx$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['latest'],
        },
      }],
    }, {
      test: /\.scss/,
      use: [
        'style-loader', {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: [path.join(__dirname, '/../../frontend/app/src/assets/styles/')],
          },
        },
      ],
    }
    ]
  },
};

module.exports = config;
