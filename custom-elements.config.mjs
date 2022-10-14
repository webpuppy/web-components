import {
	name,
	description,
	version,
	author,
	homepage,
	license
	} from './package.json' assert { type: 'json' };

export default {
	globs: ['src/components/**/*.ts'],
	exclude: ['**/*.css.ts'],
	plugins: [
		{
			name: 'wp-package-data',
			packageLinkPhase({ customElementsManifest }) {
				customElementsManifest.package = {
					name,
					description,
					version,
					author,
					homepage,
					license,
				};
			},
		},
	],
};
