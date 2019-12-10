const path = require('path')

const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')

module.exports = {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.js',
			format: 'cjs',
			exports: 'named',
		},
		{
			file: 'dist/index.mjs',
			format: 'esm',
		}
	],
	external: Object.keys(require('../package.json').dependencies || {}),
	plugins: [
		babel({
			babelrc: true,
			exclude: 'node_modules/**'
		}),
		resolve(),
		commonjs(),
	]
}
