var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.js': ['webpack', 'sourcemap', 'coverage'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        preLoaders: [{
          test: /\.js$/,
          exclude: [/node_modules/, /\.spec.js$/],
          loader: 'isparta-instrumenter'
        }],
        loaders: [{
          test: /\.js$/,
          loader: 'babel',
          exclude: path.resolve(__dirname, 'node_modules')
        }, {
          test: /\.json$/,
          loader: 'json',
        }]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-mocha-reporter',
      'karma-chai'
    ],
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    coverageReporter: {
      reporters: [{
        type: 'text-summary'
      }, {
        type: 'html',
        dir: 'coverage/'
      }]
    }
  })
};