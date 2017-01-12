// see http://vuejs-templates.github.io/webpack for documentation.
let path = require('path');

module.exports = {
    dev: {
        env: require('./dev.env'),
        port: 1337,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: true
    }
};