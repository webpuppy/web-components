import resolve from '@rollup/plugin-node-resolve';
import styles from 'rollup-plugin-styles';
import dts from 'rollup-plugin-dts';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import peers from 'rollup-plugin-peer-deps-external';

const pkg = require('./package.json');

export default [
	{
		input: './src/index.ts',
		plugins: [
			styles(),
			peers(),
			resolve(),
			typescript(),
			babel()
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
