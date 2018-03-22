const merge = require('webpack-merge');
const webpack = require('webpack');
const sharedConfig = require('./shared.js');
const {settings, output} = require('./config.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(sharedConfig, {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    filename: '[name].js',
  },
  devtool: false,
  stats: 'normal',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin('[name].css'),
    new CompressionPlugin({ asset: '[path].gz[query]', algorithm: 'gzip', test: /\.(js|css|html|json|ico|svg|eot|otf|ttf)$/ }),
  ],
});
