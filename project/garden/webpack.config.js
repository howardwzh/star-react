const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

const HtmlWebpackPluginIndexConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body'
})
const CleanWebpackPluginConfig = new CleanWebpackPlugin(
  path.resolve(__dirname, 'dist')
)

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name]_bundle.[hash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        use: [
          'babel-loader',
          'eslint-loader'
        ],
        include: `${__dirname}/src`,
        exclude: /bundle\..+\.js$/
      },
      {
        test: /\.less$|\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true}
          }
        ]
      }
    ]
  },
  devServer: {
    inline: true,
    port: 8010
  },
  plugins: [
    CleanWebpackPluginConfig,
    HtmlWebpackPluginIndexConfig
  ]
}