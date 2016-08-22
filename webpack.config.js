var path = require('path');
const webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
// var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    app: './client/entry.js',
    vendor: ['babel-polyfill', 'react', 'react-dom', 'react-redux', 'react-router', 'redux', 'redux-thunk', 'redux-form', 'immutable']
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: '/dist',
    filename: 'bundle.[name].[hash].js',
    publicPath: '/'
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
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new DashboardPlugin()
  ]
};
