const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 9000
    }
});