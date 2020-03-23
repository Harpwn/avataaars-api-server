// webpack.config.js
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "app.js"),
    target: 'node',
    output: {
        path: path.join(__dirname, "public", "dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
    }
};
