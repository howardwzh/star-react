const HtmlWebpackPlugin = require('html-webpack-plugin')

const IndexHTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  chunks: ['index'],
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body'
})

const GalleryHTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  chunks: ['gallery'],
  template: `${__dirname}/src/index.html`,
  filename: 'gallery.html',
  inject: 'body'
})

module.exports = {
  entry: {
    'index': './src/index.js',
    'gallery': './src/gallery.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].[chunkHash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|woof|woff2)$/,
        loader: 'file-loader?limit=8192'
      }
    ]
  },
  devServer: {
    inline: true,
    port: 8801
  },
  plugins: [IndexHTMLWebpackPluginConfig, GalleryHTMLWebpackPluginConfig]
}