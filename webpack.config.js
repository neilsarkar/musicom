var path = require('path');

module.exports = {
  entry: "./app/entry.js",
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css/, loader: "style!css" }
    ]
  }
}
