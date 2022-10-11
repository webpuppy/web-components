import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
export default {
	input: './src/index.ts',
	plugins: [
		typescript(),
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