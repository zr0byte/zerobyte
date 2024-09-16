const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/src/index.js', // Corrected path
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/public/index.html', // Corrected path
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'app/public'), // Corrected path
    },
    compress: true,
    port: 3000,
  },
};