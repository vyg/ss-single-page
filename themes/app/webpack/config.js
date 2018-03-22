// Common config for webpack

const { join, resolve } = require('path');
const { env } = require('process');
const { safeLoad } = require('js-yaml');
const { readFileSync } = require('fs');

const configPath = resolve('./webpack.yml');
const loadersDir = join(__dirname, 'loaders');
const settings = safeLoad(readFileSync(configPath), 'utf8')[env.NODE_ENV]

const DEV_SERVER_URL = (env) => {
    if (env === 'development') {
        return `http://${settings.dev_server.host}:${settings.dev_server.port}`;
    }
    return null;
}

function removeOuterSlashes(string) {
  return string.replace(/^\/*/, '').replace(/\/*$/, '')
}

function formatPublicPath(host = '', path = '') {
  let formattedHost = removeOuterSlashes(host)
  if (formattedHost && !/^http/i.test(formattedHost)) {
    formattedHost = `//${formattedHost}`
  }
  const formattedPath = removeOuterSlashes(path)
  return `${formattedHost}/${formattedPath}/`
}

const output = {
    path: resolve(__dirname, settings.output_path),
    publicPath: env.NODE_ENV === 'production' ?  settings.public_output_path : formatPublicPath(DEV_SERVER_URL(env.NODE_ENV), settings.public_output_path)
};

module.exports = {
    settings,
    env,
    loadersDir,
    output
};
