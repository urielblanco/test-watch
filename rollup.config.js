import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'test/src/index.js',
  output: [{ dir: path.resolve('test/dist/'), format: 'es' }],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extensions: ['.css'],
    }),
  ],
};
