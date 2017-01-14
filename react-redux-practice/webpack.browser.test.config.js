const path = require('path')
const config = require('./webpack.config.js')
 
config.devServer = {
  host: 'localhost',
  port: '8081'
}
 
const index = path.resolve(__dirname, './test/index.js')
 
config.entry = {
  test: [`mocha!${index}`]
}
config.plugins = []

config.output.publicPath = 'http://localhost:8081/'
 
module.exports = config