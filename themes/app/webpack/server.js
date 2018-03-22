/* Webpack Development Server Configuration
===================================================================================================================== */

// Load Core Modules:

const { resolve } = require('path');
const { settings } = require('./config.js');
const config = require('./development.js');

const webpack = require('webpack');
// Load Development Server Module:
const WebpackDevServer = require('webpack-dev-server');

// Create Development Server Instance:
const server = new WebpackDevServer(
  webpack(config), {
    hot: true,
    historyApiFallback: true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: {
      colors: true
    }
  }
);

// Obtain Host and Port:
const host = config.devServer.host;
const port = config.devServer.port;
// Begin Listening:

server.listen(port, host, (err) => {
  if (err) return console.log(err);
  console.log(`Development server listening on ${host}:${port}...`);
});
