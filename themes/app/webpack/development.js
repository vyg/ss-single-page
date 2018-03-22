const merge = require('webpack-merge');
const webpack = require('webpack');
const sharedConfig = require('./shared.js');
const {settings, output} = require('./config.js');

const DEV_SERVER_URL = `http://${settings.dev_server.host}:${settings.dev_server.port}`;

module.exports = merge(sharedConfig, {

  entry: {
    'bundle': [
      'react-hot-loader/patch', // activate HMR for React
      `webpack-dev-server/client?${DEV_SERVER_URL}`, // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './src/index.js'
    ]
  },

  devtool: 'cheap-eval-source-map',

  stats: {
    errorDetails: true
  },

  output: {
    pathinfo: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin() // prints module names in console on HRM updates
  ],

  devServer: {
    clientLogLevel: 'none',
    https: settings.dev_server.https,
    host: settings.dev_server.host,
    port: settings.dev_server.port,
    contentBase: output.path,
    public: 'assets',
    publicPath: output.publicPath,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
});
