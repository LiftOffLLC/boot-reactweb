// webpack.config.js
'use strict';

const TARGET = process.env.npm_lifecycle_event;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/main.js',
    vendor: ['babel-polyfill', 'react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux', 'redux-thunk', 'redux-form', 'redux-immutable', 'firebase', 'immutable', 'react-lazy-cache']
  },
  output: {
    path: './build', // This is where images AND js will go
    publicPath: '/',
    filename: 'bundle.[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel-loader'],
      },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 for <=8k images, direct URLs for the rest
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  },
  devtool: 'source-map'
};
