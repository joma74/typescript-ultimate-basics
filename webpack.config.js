const path = require("path");
const prettyjson = require("prettyjson");

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
    hot: true,
    stats: "errors-only",
    host: "0.0.0.0"
  },
  module: {
      rules: [{
          test: /\.ts$/,
          use: 'awesome-typescript-loader'
      }]
  }
};

console.log(prettyjson.render(webpackConfig));

module.exports = webpackConfig;
