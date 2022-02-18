const path = require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

// import path from 'path';
// import webpack from 'webpack';

// new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']);

// const envVariables = new webpack.DefinePlugin({
//   ENV: JSON.stringify(process.env.ENV)
//  });

module.exports = {
  mode: 'development',
  entry: './server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib/dist')
  },
  resolve: { extensions: ['.wasm', '.mjs', '.js', '.json'] },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
          },
        }
      }
    ]
  },
  plugins: [
    new NodePolyfillPlugin(),
    // envVariables
  ]
};
