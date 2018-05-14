const path = require("path");
const prettyjson = require("prettyjson");

/**
 * @type {import ("webpack").Configuration}
 */
var webpackConfig = {
  entry: "./build/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist"
  },
  resolve: {
    extensions: [".js"]
  },
  devServer: {
    port: 8080,
    watchContentBase: false,
    hot: true,
    stats: "errors-only",
    host: "0.0.0.0"
  }
};

console.log(prettyjson.render(webpackConfig));

module.exports = webpackConfig;
