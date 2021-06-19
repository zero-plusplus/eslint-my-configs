const preset = require('./src/_preset');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  overrides: [ preset.js.default ],
};
