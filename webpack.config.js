const path = require('path');

module.exports = {
  target: ['web', 'es6'],
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: "inline-source-map", // add this if want to debug
  devServer: {
    static: {
      directory: path.resolve(__dirname, './'),
    }
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules/@refinitiv-ui'),
        path.resolve(__dirname, 'node_modules/@webcomponents'),
        path.resolve(__dirname, 'node_modules/@lit'),
        path.resolve(__dirname, 'node_modules/lit-element'),
        path.resolve(__dirname, 'node_modules/lit-html'),
        path.resolve(__dirname, 'node_modules/d3-color'),
        path.resolve(__dirname, 'node_modules/lightweight-charts')
      ]
    }]
  }
};