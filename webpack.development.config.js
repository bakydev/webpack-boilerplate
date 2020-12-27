const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    stats: {
      env: false,
      colors: true,
      assets: false,
      logging: 'none',
      children: false,
      modules: false,
      entrypoints: false,
    },
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    compress: true,
    host: 'localhost',
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../../'
            }
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/css/style.css',
    }),
  ]
});
