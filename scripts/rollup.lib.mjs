import resolve from '@rollup/plugin-node-resolve';
import styles from 'rollup-plugin-styles';
import dts from 'rollup-plugin-dts';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import peers from 'rollup-plugin-peer-deps-external';
import pkg from '../package.json' assert { type: 'json' };
import babelConfig from '../babel.config.cjs';
import tsConfig from '../tsconfig.json' assert { type: 'json' };

/**
 * todo - split output modules into single files per, 
 * to assist with code splitting
 */
export default [
	{
		input: './src/index.ts',
		plugins: [
			styles(),
			peers(),
			resolve(),
			typescript({ ...tsConfig.compilerOptions, declaration: true, declarationDir: 'lib' }),
			babel(babelConfig)
		],
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: 'esm',
				sourcemap: true,
			}
  	],
	},
	{
		input: 'lib/esm/index.d.ts',
		output: { 
			file: 'lib/index.d.ts',
			format: 'esm' 
		},
		plugins: [
			dts()
		],
	}
];
