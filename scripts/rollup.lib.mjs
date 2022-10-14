import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import peers from 'rollup-plugin-peer-deps-external';
import babelConfig from '../babel.config.cjs';
import tsConfig from '../tsconfig.json' assert { type: 'json' };
import glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default [
	{
		input: Object.fromEntries(
			glob.sync('src/**/*.ts').map(file => [
				path.relative('src', file.slice(0, file.length - path.extname(file).length)),
				fileURLToPath(new URL(`../${file}`, import.meta.url))
			])
		),
		plugins: [
			peers(),
			resolve(),
			typescript({ ...tsConfig.compilerOptions, declaration: true, declarationDir: 'lib' }),
			babel(babelConfig)
		],
		output: [
			{
				dir: 'lib',
				format: 'esm',
				sourcemap: true,
			}
  	],
	}
];
