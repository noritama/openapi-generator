import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-re';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    format: 'esm'
  },
  plugins: [
    json(),
    replace({
      // ... do replace before commonjs
      patterns: [
        {
          // regexp match with resolved path
          match: /formidable(\/|\\)lib/,
          // string or regexp
          test: 'if (global.GENTLY) require = GENTLY.hijack(require);',
          // string or function to replaced with
          replace: '',
        },
        {
          match: /ApiClient/,
          test: 'import superagent from "superagent";',
          replace: 'import superagent from "superagent/lib/client";',
        }
      ]
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};
