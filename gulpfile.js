import gulp from 'gulp';
import ts from 'gulp-typescript';
import tsconfig from './tsconfig.json' assert { type: 'json' };
import 'merge2';
import { watchRollup } from './tools/rollup-watch.cjs';
const bundleGlob = './src/**/*.ts';
const bDir = 'bundle';


function buildBundle() {
	return gulp.src(bundleGlob)
	.pipe(ts(tsconfig.compilerOptions))
	.pipe(gulp.dest('build'));
}

export default function watch() {
	gulp.watch(bundleGlob, gulp.series(buildBundle));
	watchRollup();
}
