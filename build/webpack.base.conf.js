"use strict";

let path = require('path'),
    config = require('../config'),
    utils = require('./utils'),
    projectRoot = path.resolve(__dirname, './');

let env = process.env.NODE_ENV;

module.exports = {
    entry: {
        app: ['babel-polyfill', 'whatwg-fetch', './src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'build.js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json'],
        fallback: [path.join(__dirname, './node_modules')],
        alias: {
            'src': path.resolve(__dirname, './src'),
            'assets': path.resolve(__dirname, './src/assets')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, './node_modules')],
        root: path.join(__dirname, './node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    vue: {
        loaders: utils.cssLoaders({sourceMap: true}),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    }
}