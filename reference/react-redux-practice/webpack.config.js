const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginIndexConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name]_bundle.[chuckHash].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: `${__dirname}/src`,
        exclude: /bundle\..+\.js$/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    inline: true,
    port: 8010
  },
  plugins: [
    HtmlWebpackPluginIndexConfig
  ]
}