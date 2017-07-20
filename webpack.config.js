let webpack = require('webpack');
let port = 8080;
module.exports = {
    entry: __dirname + '/main.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js',
        sourceMapFilename: "bundle.map.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ],
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            options: {
              emitWarning: true
            }
          }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      hot: true,
      contentBase: './dist',
      port: port
    },
    devtool: 'source-map'
}
