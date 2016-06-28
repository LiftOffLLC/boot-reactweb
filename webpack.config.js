var path = require('path')
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
      {test: /\.css$/, loader: "style!css"},
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};
