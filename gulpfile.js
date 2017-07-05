var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var svgstore = require('gulp-svgstore');


gulp.task('concat-css', function () {
  return gulp.src('css/dest/*.css')
    .pipe(concatCss("styles-main.css"))
    .pipe(gulp.dest('css/'));
});

gulp.task('sass', function () {
  return gulp.src('css/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/dest'));
});

//script paths
var jsFiles = 'js/src/*.js',  
    jsDest = 'js/';

gulp.task('concat-js', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('script.main.js'))
        .pipe(gulp.dest(jsDest));
});

//https://www.npmjs.com/package/gulp-svgstore
gulp.task('svg', function () {
    return gulp
        .src('img/header/*.svg', { base: 'img/header/sprite' })
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgstore())
        .pipe(gulp.dest('img/svg'));
});


//https://www.npmjs.com/package/gulp-svg-spritesheet
// gulp.task('sprites', function () {
//     return gulp.src('img/header/*.svg')
//         .pipe(svgSprite())
//         .pipe(gulp.dest("img/spritesvg"));
// });



//Watch task
gulp.task('watch',function() {
    gulp.watch(['css/src/*.scss', 'css/dest/*.css', 'css/*.css', 'js/src/*.js'], ['concat-css', 'sass', 'concat-js']);
});
