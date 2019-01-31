const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const packages = ["react-modalbutton"];

const packageNamePaths = {};
packages.forEach(packageName => {
  packageNamePaths[packageName] = path.resolve(__dirname, `../${packageName}`);
});

module.exports = {
  devtool: "source-map",
  mode: process.env.production ? "production" : "development",
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
    vendor: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: process.env.production
      ? `bundle-[chunkHash].js`
      : `bundle-[hash].js`,
    chunkFilename: process.env.production
      ? `[name]-[chunkHash].js`
      : `[name]-[hash].js`,
    publicPath: "/"
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      )
    }),
    new HTMLWebpackPlugin({
      template: "index.html.ejs"
    }),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, "static") }]),
    new webpack.HotModuleReplacementPlugin()
  ].concat(
    process.env.NODE_ENV === "production"
      ? [
          new SWPrecacheWebpackPlugin({
            cacheId: "react-modalbutton-website",
            staticFileGlobsIgnorePatterns: [/\.map$/]
          })
        ]
      : []
  ),

  resolve: {
    extensions: [".js", ".jsx"],
    alias: packageNamePaths
  },

  resolveLoader: {
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "../node_modules"),
      path.resolve(__dirname, "webpack")
    ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|examples/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.jsx?$/,
        include: /examples/,
        resourceQuery: /bundle/,
        use: [
          {
            loader: "bundle-loader",
            options: {
              lazy: true
            }
          },
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.jsx?$/,
        include: /examples/,
        resourceQuery: /prismjs/,
        use: [
          {
            loader: "bundle-loader",
            options: {
              lazy: true
            }
          },
          {
            loader: "prismjs-loader",
            options: {
              lang: "jsx"
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        exclude: /prismjs/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.s?css$/,
        include: /prismjs/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.md(\?(.+))?$/,
        loader: "markdown-loader"
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    hotOnly: true,
    stats: {
      assets: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: true
    }
  }
};
