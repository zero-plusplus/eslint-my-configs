const globals = require('globals');
const { javascript, typescript } = require('./src/index.js');

// Configuration examples and operational check configurations
module.exports = [
  typescript.createLanguageOptions({
    globals: globals.node,
    parserOptions: {
      project: true,
      tsconfigDirName: __dirname,
    },
  }),
  javascript.config,
  typescript.config,
];
