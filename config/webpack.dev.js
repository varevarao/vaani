const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.join(__dirname, '..', '/build'),
        filename: 'bundle.js'
    },
    plugins: [],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: false,
        host: '0.0.0.0',
        port: 3000,
    }
});