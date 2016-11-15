const path = require('path');
const StatsPlugin = require('stats-webpack-plugin');

console.log();

module.exports = {
  entry: {
    app: './index.web.js',
  },
  output: {
    path: './web-server/build',
    publicPath: '/',
    filename: 'bundle.[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 for <=8k images, direct URLs for the rest
    ]
  },
  plugins: [
    new StatsPlugin('stats.json')
  ],
  resolve: {
    extensions: ['.js', '.json']
  },
  devtool: 'source-map'
};
