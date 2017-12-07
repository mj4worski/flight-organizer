const path = require('path');
const webpack = require('webpack');

const BUILD_PATH = path.resolve(`${__dirname}/build`);
const APP_PATH = path.resolve(`${__dirname}/src/main`);

module.exports = {
  entry: `${APP_PATH}/index.js`,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: BUILD_PATH,
    port: 3333,
    historyApiFallback: true,
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
    }
      ,
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
};
