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
    path.join(__dirname, './../../frontend/admin-panel/main.js'),
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
            includePaths: [path.join(__dirname, '/../../frontend/assets/styles/')],
          },
        },
      ],
    },
    {
      test: /\.(png|jp(e*)g|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8000, // Convert images < 8kb to base64 strings
          name: 'images/[hash]-[name].[ext]'
        }
      }]
    }
    ]
  },
};

module.exports = config;
