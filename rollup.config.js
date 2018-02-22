import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
  input: 'index.js',
  output: {
    file: 'rollup.js',
    format: 'cjs'
  },
  name: 'transitive-deps',
  plugins: [
		resolve(),
		commonjs(),
		json()
	]
};
