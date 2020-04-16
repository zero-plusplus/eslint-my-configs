const { rules } = require('./src/javascript');
// const { rules } = require('./src/typescript');

module.exports = {
  parserOptions: {
      ecmaVersion: 2018
  },
  env: {
      node: true,
      es6: true
  },
  rules
}