"use strict";

let path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    opn = require('opn'),
    proxyMiddleware = require('http-proxy-middleware'),
    webpackDevConfig  = require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
let port = 1337;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
let proxyTable = {};

let app = express();
let compiler = webpack(webpackDevConfig);

let devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    stats: {
        colors: true,
        chunks: false,
        // errorDetails: true,
        // reasons: true,
        // modules: true
    }
})

let hotMiddleware = require('webpack-hot-middleware')(compiler);
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({action: 'reload'})
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
    let options = proxyTable[context]
    if (typeof options === 'string') {
        options = {target: options}
    }
    app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
let staticPath = path.posix.join('/', 'dist')
app.use(staticPath, express.static('./dist'))

module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    let uri = 'http://localhost:' + port;
    console.log('Listening at ' + uri + '\n')

    // open browser
    opn(uri)
})