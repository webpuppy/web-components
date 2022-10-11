const assumptions = {
  'setPublicClassFields': true
};

const plugins = [
  ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true } ],
  ['@babel/plugin-proposal-class-properties'],
];

const presets = [
	'@babel/preset-env',
	'@babel/preset-react',
	'@babel/preset-typescript'
]


module.exports = { assumptions, plugins, presets };