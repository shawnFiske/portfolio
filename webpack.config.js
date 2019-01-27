var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    optimization: {
    // We no not want to minimize our code.
    minimize: false
    },
    output: {
        filename: "../build/bundle.js"
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
            },
        ]
        },
    watch: true
}