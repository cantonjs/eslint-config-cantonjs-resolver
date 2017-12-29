'use strict';

module.exports = {
	'parser': 'babel-eslint',
	'extends': 'cantonjs',
	'settings': {
		'import/resolver': {
			'webpack': {},
			'babel-module': {},
		},
	},
};
