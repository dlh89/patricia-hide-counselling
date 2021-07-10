const gulp = require('gulp');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const prefix = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
 
gulp.task('default', () => {
    watch('src/styles/**/*.scss', css);
    watch('src/**/*.js', js);
    console.log('Watching src folder');
});

function css() {
    console.log('Compiling CSS');
    gulp.src('src/styles/**/*.scss', { ignoreInitial: false })
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
}

function js() {
    console.log('Compiling JS');
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
}