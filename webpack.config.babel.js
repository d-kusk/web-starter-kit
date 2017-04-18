import webpack from 'webpack'
import path from 'path'
import config from './config'

module.exports = {
  entry: path.join(__dirname, config.source.javascripts.path + config.source.javascripts.fileName),
  output: {
    path: path.join(__dirname, config.build.javascripts.path),
    filename: config.build.javascripts.fileName
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
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
