const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

//
//
//

const optimization = () => {
  const options = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (isProd) {
    options.minimizer = [new OptimizeCssAssetsPlugin(), new TerserPlugin()];
  }
  return options;
};

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "[name].[hash].js",
    path: path.join(__dirname, "build"),
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
    hot: isDev,
  },
  optimization: optimization(),

  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // hmr: isDev,
              // reloadAll: true,
              esModule: false,
              publicPath: "",
            },
          },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                path: "./src/postcss.config.js",
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },

      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },

      {
        test: /\.(jpe?g|png|gif|svg|ico|webp)$/i,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, "./public/_redirect"), to: "" },
        { from: path.join(__dirname, "./public/favicon.ico"), to: "" },
      ],
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      insert: "#some-element",
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
};
