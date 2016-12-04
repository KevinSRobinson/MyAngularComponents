'use strict';
var buildPath = require('path').resolve(__dirname, 'build');
var webpack = require('webpack');

var config = {
    context: __dirname,
    watch: true,
    entry: './vendorEntry.js',
    output: {
        path: '/dist/',
        filename: 'vendorBundle.js'
    },   
    modulesDirectories: ['app/node-modules'],
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            'window.moment': 'moment',
        })
    ]
};


module.exports = config;