module.exports = function(config) {
  config.set({
    basePath: '', 
    autoWatch: true,
    frameworks: ['mocha'],
    files: [
      'test/.setup.js',
      'test/*.spec.js'
    ],  
    browsers: ['PhantomJS'],
 
    reporters: ['progress', 'coverage'],
    preprocessors: { '*.js': ['coverage'] },
 
    singleRun: true
  }); 
};