import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

export const assumptions = {
	'setPublicClassFields': true
};

export const plugins = [
	['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true } ],
	['@babel/plugin-proposal-class-properties'],
];

export const presets = [
	'@babel/preset-env',
	'@babel/preset-react',
	'@babel/preset-typescript'
]
export default {
	input: './src/index.ts',
	plugins: [
		typescript(),
		resolve(),
		babel({ assumptions, plugins, presets }),
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