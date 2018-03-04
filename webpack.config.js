const path = require('path');

module.exports = {
  target: 'node',
  entry: './lib/vorpal.js',
  output: {
    filename: 'vorpal.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Vorpal',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
