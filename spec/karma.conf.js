module.exports = function(config) {
  config.set({
    browsers   : ['Firefox'],
    files      : ['../vendor/*.js', '../lib/*.css', '../lib/*.js', 'lib/jasmine-jquery.js', 'lib/helper.js', 'options_spec.js', '*spec.js' ],
    frameworks : ['jasmine'],
    logLevel   : config.LOG_ERROR,
    reporters  : ['dots'],
    singleRun  : true
  });
};
