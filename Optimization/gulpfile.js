var gulp = require('gulp');
var imageop=require('gulp-image-optimization');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');
var uncss = require('gulp-uncss');

gulp.task('imageop', function(){
	 gulp.src('img/*')
	.pipe(imageop())
	.pipe(gulp.dest('dist/img'));
}); 

gulp.task('compress1', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
});

gulp.task('compress2', function() {
  gulp.src('views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('views/js/'))
});

gulp.task('minify-css', function() {
  gulp.src('css/*.css')
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('css/'))
});


gulp.task('minify-html', function() {
  gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('minify-htmlp', function() {
  gulp.src('views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

var src = 'views/';
var dest = 'views/';

gulp.task('uncss', function() {
    return gulp.src(src + 'css/bootstrap-grid.css')
        .pipe(uncss({
            html: [src + 'pizza.html']
        }))
        .pipe(rename({suffix: '.un'}))
        .pipe(gulp.dest(dest + 'css'));
});

gulp.task('minifyafteruncss', function() {
  gulp.src('views/css/*.css')
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('views/css/'))
});


