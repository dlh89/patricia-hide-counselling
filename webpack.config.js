const path = require('path');

// include the css extraction and minification plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    entry: './src/scripts/main.js', // create this file if you don't have one
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new HtmlWebpackPlugin({
        template: 'about/index.html',
        filename: 'about/index.html',
      }),
      new HtmlWebpackPlugin({
        template: 'contact/index.html',
        filename: 'contact/index.html',
      }),
      new HtmlWebpackPlugin({
        template: 'what-to-expect/index.html',
        filename: 'what-to-expect/index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'images', to: 'images' }, // copies images to /dist/images
          { from: 'favicons', to: 'favicons' }, // copies favicons to /dist/favicons
        ],
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname),
      },
      compress: true,
      port: 9000,
    },
  }
};
