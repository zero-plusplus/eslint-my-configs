const javascript = require('./rules/javascript');
const lit = require('./rules/lit');
const react = require('./rules/react');
const typescript = require('./rules/typescript');
const preset = require('./preset');

module.exports = {
  javascript,
  lit,
  preset,
  react,
  typescript,
};
