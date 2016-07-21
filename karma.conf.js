module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'https://npmcdn.com/@angular/router@0.2.0/angular1/angular_1_router.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/app/*.js',
      'app/class-toggler/*.js',
      'app/courses/*.js',
      'app/shared/*.js',
      'app/admin/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
