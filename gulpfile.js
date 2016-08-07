    var gulp = require('gulp'),
    csso = require('gulp-csso'),
    myth = require('gulp-myth'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

gulp.task('css', function() {
    gulp.src(['./assets/css/src/*.css', './assets/css/src/*.scss'])
        .pipe(concat('styles.min.css'))
        .pipe(sass())
        .pipe(myth())
        .pipe(csso())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('js', function() {
    gulp.src(['./assets/js/src/jquery-1.11.3.min.js', './assets/js/src/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js'));

});
