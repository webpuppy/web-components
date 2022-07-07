const {
	series,
	parallel,
	src,
	dest,
	watch
} = require('gulp');
const source = require('vinyl-source-stream');
const rollup = require('rollup-stream');
const intermediaryGlob = './build/**/*.js';

function minifyBundle() {
	return rollup('rollup.config.cjs')
	.pipe(source('bundle.js'))
	.pipe(dest('bundle'));
}

exports.default = function() {
	watch(intermediaryGlob, series(minifyBundle));
}
