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
    filename: '[name]_bundle.[hash].js'
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
    HtmlWebpackPluginIndexConfig
  ]
}