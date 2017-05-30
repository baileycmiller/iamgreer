/**METHODS

gulp.task(name, fn) – registers a function with a name
gulp.watch(glob, fn) – runs a function when a file that matches the glob changes
gulp.src(glob) – returns a readable stream
gulp.dest(folder) – returns a writable stream

**/

//not sure, was in tutorial
'use strict';

// Include gulp, sass, and un-css
var gulp = require('gulp');
var sass = require('gulp-sass');

//Sass task
gulp.task('sass', function(){
  return gulp.src('stylesheets/scss/application.scss') //the source sass file
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('stylesheets/css')) //the folder you want the css to go
}); //run 'gulp sass' to compile

//Watch for changes in sass to update css automatically
gulp.task('automate', function() {
    gulp.watch('stylesheets/scss/**/*.scss', ['sass']);
}); //run 'gulp automate'
