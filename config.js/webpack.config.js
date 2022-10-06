const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");

const config = {
  mode: "development",
  entry: "./src/entry",
  output: {
    filename: "webpack-output.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["img-loader"]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin({
      handler: (percentage, message) => {
        console.info(percentage, message);
      }
    })
  ]
};

module.exports = config;

// webpack.config.js

module.exports = function (env, args) {
  return {
    mode: env.production ? "production" : "development",
    entry: "./src/entry",
    output: {
      filename: "webpack-output.js",
      path: path.resolve(__dirname, "dist")
    },
    plugins: [
      env.development &&
      new webpack.ProgressPlugin({
        handler: (percentage, message) => {
          console.info(percentage, message);
        }
      })
    ]
  };
};
