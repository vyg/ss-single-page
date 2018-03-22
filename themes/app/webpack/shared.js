const webpack = require('webpack');
const { basename, dirname, join, relative, resolve } = require('path');
const { sync } = require('glob');
const { env, settings, output, loadersDir } = require('./config.js');

const extensionGlob = `**/*{${settings.extensions.join(',')}}*`;


module.exports = {
    output: {
        filename: '[name].js',
        path: output.path,
        publicPath: output.publicPath
    },
    module: {
        rules: sync(join(loadersDir, '*.js')).map(loader => require(loader))
    },
    plugins: [
      new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env)))
    ],
    resolve: {
        extensions: settings.extensions,
        alias: {
          'jquery$': resolve(__dirname, 'node_modules/jquery/src/jquery'),
          'modernizr$': resolve(__dirname, '.modernizrrc')
        },
        modules: [
            resolve(settings.source_path),
            'node_modules'
        ]
    },
    resolveLoader: {
        modules: ['node_modules']
    }
}
