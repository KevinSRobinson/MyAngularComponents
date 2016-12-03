'use strict';
var buildPath = require('path').resolve(__dirname, 'build');

var config = {
    context: __dirname,
    watch: true,
    entry: './componentsEntry.js',
    output: {
        path: buildPath,
        filename: 'myAngularComponents.js'
    }
};


module.exports = config;