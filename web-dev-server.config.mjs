/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { legacyPlugin } from '@web/dev-server-legacy';

const mode = process.env.MODE || 'dev';
if (!['dev', 'prod'].includes(mode)) {
	throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

export default {
	nodeResolve: {exportConditions: mode === 'dev' ? ['development'] : []},
	preserveSymlinks: true,
	port: 3000,
	plugins: [
		legacyPlugin({
			polyfills: {
				// Manually imported in index.html file
				webcomponents: true,
				coreJs: true,
				fetch: true,
			},
			custom: [
				{
					name: 'lit-polyfill-support',
					path: 'node_modules/lit/polyfill-support.js',
					// eslint-disable-next-line quotes
					test: "!('attachShadow' in Element.prototype)",
					module: false,
				},
			],
		}),
	],
};
