const gulp = require('gulp');

return gulp.src([
    './public/assets/*/*.*',
    './public/*/*.json'
])
    .pipe(gulp.dest('./static/'));