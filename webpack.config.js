var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: "./client//entry.js",
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: '/static/'
  },
  module: {
    loaders : [
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
