var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');



gulp.task('minify-css-olman', function(){
  return gulp.src('www/source/css/index.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('www/dist/css/'));
});

gulp.task('concat-js-olman', ['minify-css-olman'], function(){
    return gulp.src(['www/source/js/jquery-1.11.2.min.js', 'www/source/js/jquery-rotate.js', 'www/source/js/lab43.js'])
        .pipe(concat('lab43.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/dist/js/'));
});
