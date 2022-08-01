import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
export default {
	input: './build/index.js',
	plugins: [
		resolve(),
		// Minify JS
		terser({
			ecma: 2015,
			module: true,
			compress: true,
			mangle: true
		}),
	],
	output: {
		dir: 'bundle',
	},
};
