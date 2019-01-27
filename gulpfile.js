'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
// var fs = require("fs");
// var browserify = require("browserify");

gulp.task('build', function () {
  nodemon({
    script: 'buildApp.js', 
    ext: 'cs'
  })
  /* var b = browserify();
    b.ignore('app jsdom');
    return b.bundle()
    .pipe(fs.createWriteStream("build/bundle.js"));
  */
})

gulp.task('watch', function() {
  gulp.watch(['build/**/*.html', 'build/**/*.css', 'src/**/**/*.js'], ['build'])
});

gulp.task('check', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('default', gulp.series('build', 'watch', 'check'));