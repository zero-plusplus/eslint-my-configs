import globals from 'globals';
import { javascript, typescript } from './src/index.js';

// Configuration examples and operational check configurations
export default [
  typescript.createLanguageOptions({
    globals: globals.node,
    parserOptions: {
      project: true,
      tsconfigDirName: import.meta.dirname,
    },
  }),
  javascript.config,
  typescript.config,
];
