const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.src([
    './public/js/variables.js',
    './public/js/setNav.js',
    './public/js/carousel.js',
    './public/js/setLanguage.js',
    './public/js/portfolio.js',
    './public/js/ui.js',
])
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./static/js/'))