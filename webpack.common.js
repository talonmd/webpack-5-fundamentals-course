const path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    index: { import: "./src/js/index.js", dependOn: "shared" },
    sum: { import: "./src/js/sum.js", dependOn: "shared" },
    shared: "lodash",
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
}
