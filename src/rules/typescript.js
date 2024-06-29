const stylisticJs = require('@stylistic/eslint-plugin-js');
const stylisticTs = require('@stylistic/eslint-plugin-ts');
const parserTs = require('@typescript-eslint/parser');
const tseslint = require('typescript-eslint');
const javascript = require('./javascript.js');

module.exports = {};
module.exports.lintRules = {
  ...javascript.lintRules,

  // Wait for improve
  'no-undef': 'off', // NodeJS, BufferEncoding, etc. are not supported
  'no-undefined': 'off', // This rule is unnecessary in Typescript because undefined is not overwritten

  // TypeScript rules
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': [ 'error', { default: 'array-simple' } ],
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/ban-tslint-comment': 'off', // Not using tslint
  '@typescript-eslint/class-literal-property-style': [ 'error', 'fields' ],
  'class-methods-use-this': 'off',
  '@typescript-eslint/class-methods-use-this': javascript.lintRules['class-methods-use-this'],
  '@typescript-eslint/consistent-generic-constructors': 'error',
  '@typescript-eslint/consistent-indexed-object-style': 'off',
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/consistent-type-imports': 'off', // Not see the benefits of using type import.
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': javascript.lintRules['default-param-last'],
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': javascript.lintRules['dot-notation'],
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/explicit-member-accessibility': [ 'error', { overrides: { constructors: 'no-public' } } ],
  '@typescript-eslint/explicit-module-boundary-types': [ 'error', { allowArgumentsExplicitlyTypedAsAny: true } ],
  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': javascript.lintRules['init-declarations'],
  'max-params': 'off',
  '@typescript-eslint/max-params': javascript.lintRules['max-params'],
  '@typescript-eslint/member-ordering': 'error',
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/naming-convention': 'off', // I prefer compound syntax like "commandData_base64". Therefore, the regular expression becomes complicated. You may enable this feature if eslint is able to edit the comments on error messages
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': javascript.lintRules['no-array-constructor'],
  '@typescript-eslint/no-array-delete': 'error',
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'error',
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': javascript.lintRules['no-dupe-class-members'],
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-duplicate-type-constituents': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': javascript.lintRules['no-empty-function'],
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-floating-promises': 'off', // This rule is redundant if you do not intentionally handle the error.
  '@typescript-eslint/no-for-in-array': 'error',
  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': javascript.lintRules['no-invalid-this'],
  '@typescript-eslint/no-invalid-void-type': 'off', // Can't use Promise<void[]> when using Promise.all
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': javascript.lintRules['no-loop-func'],
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': javascript.lintRules['no-loss-of-precision'],
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': javascript.lintRules['no-magic-numbers'],
  '@typescript-eslint/no-meaningless-void-operator': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-mixed-enums': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'off', // This rule is annoying for properties that are certain to be initialized by something other than the constructor
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': javascript.lintRules['no-redeclare'],
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-require-imports': 'error',
  'no-restricted-imports': 'off',
  '@typescript-eslint/no-restricted-imports': javascript.lintRules['no-restricted-imports'],
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': javascript.lintRules['no-shadow'],
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-condition': [ 'error', { allowConstantLoopConditions: true } ],
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-template-expression': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-unsafe-unary-minus': 'error',
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'off', // Not compatible with TS3.7 Optional chaining
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': javascript.lintRules['no-unused-vars'],
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [ 'error', { functions: false, classes: false, enums: false } ],
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': javascript.lintRules['no-useless-constructor'],
  '@typescript-eslint/no-useless-empty-export': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  '@typescript-eslint/only-throw-error': 'error',
  '@typescript-eslint/parameter-properties': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'off', // Setting all enum to default values is a bit much
  '@typescript-eslint/prefer-find': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-promise-reject-errors': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off', // The error could not be resolved using types such as "DeepReadonly". "no-param-reassign" is enough
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'off', // This rule is unnecessary because the flag is changed from time to time
  '@typescript-eslint/prefer-return-this-type': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': 'error',
  'require-await': 'off',
  '@typescript-eslint/require-await': javascript.lintRules['require-await'],
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/restrict-template-expressions': [ 'error', { allowNumber: true, allowBoolean: true } ],
  '@typescript-eslint/sort-type-constituents': 'off', // This rule is a hindrance when types are ordered logically
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/switch-exhaustiveness-check': 'off',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/typedef': 'off', // It is better to pass the following arguments to tsconfig. --noImplicitAny and/or --strictPropertyInitialization
  '@typescript-eslint/unbound-method': 'error',
  '@typescript-eslint/unified-signatures': 'error',
  '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
};

module.exports.styleRules = {
  // #region js
  '@stylistic/js/array-bracket-newline': javascript.styleRules['@stylistic/js/array-bracket-newline'],
  '@stylistic/js/array-bracket-spacing': javascript.styleRules['@stylistic/js/array-bracket-spacing'],
  '@stylistic/js/array-element-newline': javascript.styleRules['@stylistic/js/array-element-newline'],
  '@stylistic/js/arrow-parens': javascript.styleRules['@stylistic/js/arrow-parens'],
  '@stylistic/js/arrow-spacing': javascript.styleRules['@stylistic/js/arrow-spacing'],
  // #endregion js

  '@stylistic/ts/block-spacing': javascript.styleRules['@stylistic/js/block-spacing'],
  '@stylistic/ts/brace-style': javascript.styleRules['@stylistic/js/brace-style'],
  '@stylistic/ts/comma-dangle': javascript.styleRules['@stylistic/js/comma-dangle'],
  '@stylistic/ts/comma-spacing': javascript.styleRules['@stylistic/js/comma-spacing'],

  // #region js
  '@stylistic/js/comma-style': javascript.styleRules['@stylistic/js/comma-style'],
  '@stylistic/js/computed-property-spacing': javascript.styleRules['@stylistic/js/computed-property-spacing'],
  '@stylistic/js/dot-location': javascript.styleRules['@stylistic/js/dot-location'],
  '@stylistic/js/eol-last': javascript.styleRules['@stylistic/js/eol-last'],
  // #endregion js

  '@stylistic/ts/func-call-spacing': javascript.styleRules['@stylistic/js/func-call-spacing'],

  // #region js
  '@stylistic/js/function-call-argument-newline': javascript.styleRules['@stylistic/js/function-call-argument-newline'],
  '@stylistic/js/function-call-spacing': javascript.styleRules['@stylistic/js/function-call-spacing'],
  '@stylistic/js/function-paren-newline': javascript.styleRules['@stylistic/js/function-paren-newline'],
  '@stylistic/js/generator-star-spacing': javascript.styleRules['@stylistic/js/generator-star-spacing'],
  '@stylistic/js/implicit-arrow-linebreak': javascript.styleRules['@stylistic/js/implicit-arrow-linebreak'],
  // #endregion js

  '@stylistic/ts/indent': javascript.styleRules['@stylistic/js/indent'],

  // #region js
  '@stylistic/js/jsx-quotes': javascript.styleRules['@stylistic/js/jsx-quotes'],
  // #endregion js

  '@stylistic/ts/key-spacing': javascript.styleRules['@stylistic/js/key-spacing'],

  // #region js
  '@stylistic/js/keyword-spacing': javascript.styleRules['@stylistic/js/keyword-spacing'],
  '@stylistic/js/line-comment-position': javascript.styleRules['@stylistic/js/line-comment-position'],
  '@stylistic/js/linebreak-style': javascript.styleRules['@stylistic/js/linebreak-style'],
  // #endregion js

  '@stylistic/ts/lines-around-comment': javascript.styleRules['@stylistic/js/lines-around-comment'],
  '@stylistic/ts/lines-between-class-members': javascript.styleRules['@stylistic/js/lines-between-class-members'],
  '@stylistic/ts/member-delimiter-style': 'error',

  // #region js
  '@stylistic/js/max-len': javascript.styleRules['@stylistic/js/max-len'],
  '@stylistic/js/max-statements-per-line': javascript.styleRules['@stylistic/js/max-statements-per-line'],
  '@stylistic/js/multiline-comment-style': javascript.styleRules['@stylistic/js/multiline-comment-style'],
  '@stylistic/js/multiline-ternary': javascript.styleRules['@stylistic/js/multiline-ternary'],
  '@stylistic/js/new-parens': javascript.styleRules['@stylistic/js/new-parens'],
  '@stylistic/js/newline-per-chained-call': javascript.styleRules['@stylistic/js/newline-per-chained-call'],
  '@stylistic/js/no-confusing-arrow': javascript.styleRules['@stylistic/js/no-confusing-arrow'],
  // #endregion js

  '@stylistic/ts/no-extra-parens': javascript.styleRules['@stylistic/js/no-extra-parens'],
  '@stylistic/ts/no-extra-semi': javascript.styleRules['@stylistic/js/no-extra-semi'],

  // #region js
  '@stylistic/js/no-floating-decimal': javascript.styleRules['@stylistic/js/no-floating-decimal'],
  '@stylistic/js/no-mixed-operators': javascript.styleRules['@stylistic/js/no-mixed-operators'],
  '@stylistic/js/no-mixed-spaces-and-tabs': javascript.styleRules['@stylistic/js/no-mixed-spaces-and-tabs'],
  '@stylistic/js/no-multi-spaces': javascript.styleRules['@stylistic/js/no-multi-spaces'],
  '@stylistic/js/no-multiple-empty-lines': javascript.styleRules['@stylistic/js/no-multiple-empty-lines'],
  '@stylistic/js/no-tabs': javascript.styleRules['@stylistic/js/no-tabs'],
  '@stylistic/js/no-trailing-spaces': javascript.styleRules['@stylistic/js/no-trailing-spaces'],
  '@stylistic/js/no-whitespace-before-property': javascript.styleRules['@stylistic/js/no-whitespace-before-property'],
  '@stylistic/js/nonblock-statement-body-position': javascript.styleRules['@stylistic/js/nonblock-statement-body-position'],
  // #endregion js

  '@stylistic/ts/object-curly-newline': javascript.styleRules['@stylistic/js/object-curly-newline'],
  '@stylistic/ts/object-curly-spacing': javascript.styleRules['@stylistic/js/object-curly-spacing'],
  '@stylistic/ts/object-property-newline': javascript.styleRules['@stylistic/js/object-property-newline'],

  // #region js
  '@stylistic/js/one-var-declaration-per-line': javascript.styleRules['@stylistic/js/one-var-declaration-per-line'],
  '@stylistic/js/operator-linebreak': javascript.styleRules['@stylistic/js/operator-linebreak'],
  '@stylistic/js/padded-blocks': javascript.styleRules['@stylistic/js/padded-blocks'],
  // #endregion js

  '@stylistic/ts/padding-line-between-statements': javascript.styleRules['@stylistic/js/padding-line-between-statements'],
  '@stylistic/ts/quote-props': javascript.styleRules['@stylistic/js/quote-props'],
  '@stylistic/ts/quotes': javascript.styleRules['@stylistic/js/quotes'],

  // #region js
  '@stylistic/js/rest-spread-spacing': javascript.styleRules['@stylistic/js/rest-spread-spacing'],
  // #endregion js

  '@stylistic/ts/semi': javascript.styleRules['@stylistic/js/semi'],

  // #region js
  '@stylistic/js/semi-spacing': javascript.styleRules['@stylistic/js/semi-spacing'],
  '@stylistic/js/semi-style': javascript.styleRules['@stylistic/js/semi-style'],
  // #endregion js

  '@stylistic/ts/space-before-blocks': javascript.styleRules['@stylistic/js/space-before-blocks'],
  '@stylistic/ts/space-before-function-paren': javascript.styleRules['@stylistic/js/space-before-function-paren'],

  // #region js
  '@stylistic/js/space-in-parens': javascript.styleRules['@stylistic/js/space-in-parens'],
  // #endregion js

  '@stylistic/ts/space-infix-ops': javascript.styleRules['@stylistic/js/space-infix-ops'],

  // #region js
  '@stylistic/js/space-unary-ops': javascript.styleRules['@stylistic/js/space-unary-ops'],
  '@stylistic/js/switch-colon-spacing': javascript.styleRules['@stylistic/js/switch-colon-spacing'],
  '@stylistic/js/template-curly-spacing': javascript.styleRules['@stylistic/js/template-curly-spacing'],
  '@stylistic/js/template-tag-spacing': javascript.styleRules['@stylistic/js/template-tag-spacing'],
  '@stylistic/js/wrap-iife': javascript.styleRules['@stylistic/js/wrap-iife'],
  '@stylistic/js/wrap-regex': javascript.styleRules['@stylistic/js/wrap-regex'],
  '@stylistic/js/yield-star-spacing': javascript.styleRules['@stylistic/js/yield-star-spacing'],
  // #endregion js

  '@stylistic/ts/type-annotation-spacing': 'error',
};
module.exports.config = {
  files: [ '**/*.ts' ],
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    '@stylistic/js': stylisticJs,
    '@stylistic/ts': stylisticTs,
  },
  rules: {
    ...module.exports.lintRules,
    ...module.exports.styleRules,
  },
};

module.exports.createLanguageOptions = (languageOptions) => {
  return {
    languageOptions: {
      parser: parserTs,
      ...languageOptions,
    },
  };
};
