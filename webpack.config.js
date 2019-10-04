const path = require('path');
const HttpWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }, {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true
            },
          },
          "css-loader"
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HttpWebpackPlugin({
      hash: true,
      filename: "index.html",
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({ filename: 'assets/css/styles.css'})
  ]
}