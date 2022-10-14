module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react',
		'@babel/preset-typescript'
	],
	plugins: [
		['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true } ],
		['@babel/plugin-proposal-class-properties'],
	],
	assumptions: {
		'setPublicClassFields': true
	}
}