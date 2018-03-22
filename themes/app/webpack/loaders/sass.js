const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { env } = require('../config.js');

const style = (loaders) => {
  return (env.NODE_ENV === 'production') ? ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: loaders,
  }) : [{ loader: 'style-loader' }].concat(loaders);
};

module.exports = {
  test: /\.(scss|sass|css)$/,
  use: style([
    {
      loader: 'css-loader',
      options: {
        sourceMap: env.NODE_ENV !== 'production',
        modules: false,
        importLoaders: 1,
        localIdentName: '[sha1:hash:hex:4]',
      },
    },
    {
      loader: 'postcss-loader',
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: env.NODE_ENV !== 'production',
      },
    },
  ]),
};
