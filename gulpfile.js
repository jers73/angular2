'use strict';
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    ts = require('gulp-typescript'),
    sourceMaps = require('gulp-sourcemaps'),
    tscConfig = require('./tsconfig.json');



gulp.task('default', () => {
});

gulp.task('sass', () => {
    return gulp.src([
        './sass/main.scss'
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('ts', () => {
    return gulp.src([
        './app/**/*.ts',
        'node_modules/typescript/lib/lib.es6.d.ts'
    ])
        .pipe(ts(tscConfig.compilerOptions))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('./js'));
});
