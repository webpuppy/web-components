// Import rollup plugins
import html from '@web/rollup-plugin-html';
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
export default {
	input: './build/index.js',
	plugins: [
		// Resolve bare module specifiers to relative paths
		resolve(),
		// Minify HTML template literals
		minifyHTML(),
		// Minify JS
		terser({
			ecma: 2020,
			module: true,
			warnings: true,
		}),
	],
	output: {
		dir: 'bundle',
	},
	preserveEntrySignatures: 'strict',
};
