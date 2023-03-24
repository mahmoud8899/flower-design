const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')



module.exports = merge(common, {
    mode : 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 3000,
        // open: true,
        historyApiFallback: true,
      },
})