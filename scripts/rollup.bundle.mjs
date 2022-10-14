import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import babelConfig from '../babel.config.cjs';

export default {
	input: './src/index.ts',
	plugins: [
		typescript(),
		resolve(),
		babel(babelConfig),
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