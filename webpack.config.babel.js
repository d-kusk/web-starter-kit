import webpack from 'webpack'
import path from 'path'
import config from './config'

module.exports = {
  entry: path.join(__dirname, config.source.javascripts.path + config.source.javascripts.fileName),
  output: {
    path: path.join(__dirname, config.build.javascripts.path),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // new webpack.optimize.UglifyJsPlugin() // 圧縮処理
  ],
  externals: {
    jquery: 'window.jQuery'
  }
};
