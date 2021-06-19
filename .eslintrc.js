const preset = require('./src/_preset');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  overrides: [ preset.js.default ],
};
