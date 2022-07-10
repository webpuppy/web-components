import gulp from 'gulp';
import ts from 'gulp-typescript';
import tsconfig from './tsconfig.json' assert { type: 'json' };
import 'merge2';
import { watchRollup } from './tools/rollup-watch.cjs';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
const sass = gulpSass(dartSass);

const styleGlob = './src/sass/**/*.scss';
const bundleGlob = './src/**/*.ts';

function buildStyles() {
	return gulp.src(styleGlob)
	  .pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest('./static'));
  };

function buildBundle() {
	return gulp.src(bundleGlob)
	.pipe(ts(tsconfig.compilerOptions))
	.pipe(gulp.dest('build'));
}

export default function() {
	gulp.watch(styleGlob, gulp.series(buildStyles));
	gulp.watch(bundleGlob, gulp.series(buildBundle));
	watchRollup();
}
