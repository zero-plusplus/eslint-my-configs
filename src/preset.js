const javascript = require('./rules/javascript');
const jsx = require('./jsx');
const lit = require('./lit');
const react = require('./react');
const typescript = require('./typescript');

const javascriptBasePreset = {
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};

const typescriptBasePreset = {
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  parserOptions: {
    ...javascriptBasePreset.parserOptions,
    tsconfigRootDir: './',
    project: [ './tsconfig.json' ],
  },
};

module.exports = {
  js: {
    default: {
      ...javascriptBasePreset,
      files: '*.js',
      plugins: javascript.plugins,
      rules: javascript.rules,
    },
  },
  jsx: {
    default: {
      ...javascriptBasePreset,
      files: '*.jsx',
      parserOptions: {
        ...javascriptBasePreset.parserOptions,
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        ...javascript.plugins,
        ...jsx.plugins,
      ],
      rules: [
        ...javascript.plugins,
        ...jsx.plugins,
      ],
    },
    react: {
      ...javascriptBasePreset,
      files: '*.jsx',
      parserOptions: {
        ...javascriptBasePreset.parserOptions,
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        ...javascript.plugins,
        ...react.plugins,
      ],
      rules: javascript.plugins,
    },
  },
  ts: {
    default: {
      ...typescriptBasePreset,
      files: '*.ts',
      parser: typescript.parser,
      plugins: typescript.plugins,
      rules: typescript.rules,
    },
  },
  tsx: {
    default: {
      ...typescriptBasePreset,
      files: '*.tsx',
      parser: typescript.parser,
      plugins: [
        ...typescript.plugins,
        ...lit.plugins,
        ...jsx.plugins,
      ],
      rules: {
        ...typescript.rules,
        ...lit.rules,
        ...jsx.rules,
      },
    },
    react: {
      ...typescriptBasePreset,
      files: '*.tsx',
      parser: typescript.parser,
      plugins: [
        ...typescript.plugins,
        ...react.plugins,
        ...lit.plugins,
        ...jsx.plugins,
      ],
      rules: {
        ...typescript.rules,
        ...react.rules,
        ...lit.rules,
        ...jsx.rules,
      },
    },
  },
};
