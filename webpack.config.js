const webpack = require("webpack");
const path = require("path");
const prettyjson = require("prettyjson");
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

/**
 * @type {import ("webpack").Configuration}
 */
var webpackConfig = {
  entry: "./src/app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devServer: {
    port: 3000,
    watchContentBase: false,
    stats: "errors-only",
    hot: true,
    host: "0.0.0.0"
  },
  module: {
      rules: [{
          test: /\.ts$/,
          use: 'awesome-typescript-loader'
      }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HardSourceWebpackPlugin(),
  ]
};

console.log(prettyjson.render(webpackConfig));

module.exports = webpackConfig;
