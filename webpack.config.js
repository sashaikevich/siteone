const path = require('path');

module.exports = {
  entry: './front/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundled.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3002,
    hot: true
  }
};