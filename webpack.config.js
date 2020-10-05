const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;
//where your file come from
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
///static folder에 emit the bundles
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  devtool: "cheap-module-source-map",
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      { test: /\.(js)$/, use: { loader: "babel-loader" } },
      {
        test: /\.(scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins() {
                  return [autoprefixer({ browser: "cover 99.5%" })];
                },
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  output: { path: OUTPUT_DIR, filename: "[name].js" },
  plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
};

module.exports = config;
