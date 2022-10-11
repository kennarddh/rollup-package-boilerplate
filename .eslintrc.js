module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		'import/extensions': ['.js', '.jsx'],
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
			},
		},
	},
	rules: {
		'import/prefer-default-export': 'off',
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-case-declarations': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
			},
		],
	},
}
