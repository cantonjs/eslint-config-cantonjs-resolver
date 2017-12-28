'use strict';

module.exports = {
	'parser': 'babel-eslint',
	'extends': 'cantonjs',
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'webpack.config.babel.js',
			},
			'babel-module': {},
		},
	},
};
