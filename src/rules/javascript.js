const stylisticJs = require('@stylistic/eslint-plugin-js');

const indentSize = 2;
module.exports = {};
module.exports.lintRules = {
  // Possible Problems
  // https://eslint.org/docs/latest/rules/#possible-problems
  'array-callback-return': 'error',
  'constructor-super': 'error',
  'for-direction': 'error',
  'getter-return': 'error',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-const-assign': 'error',
  'no-constant-binary-expression': 'error',
  'no-constant-condition': [ 'error', { checkLoops: false } ], // Allow while (true)
  'no-constructor-return': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-ex-assign': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-import-assign': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-obj-calls': 'error',
  'no-promise-executor-return': 'error',
  'no-prototype-builtins': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-setter-return': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'off',
  'no-this-before-super': 'error',
  'no-undef': 'error',
  'no-unexpected-multiline': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unreachable': 'error',
  'no-unreachable-loop': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-private-class-members': 'error',
  'no-unused-vars': [ 'warn', { args: 'none' } ],
  'no-use-before-define': [ 'error', { function: false, classes: false } ],
  'no-useless-assignment': 'error',
  'no-useless-backreference': 'error',
  'require-atomic-updates': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',

  // Suggestions
  // https://eslint.org/docs/latest/rules/#suggestions
  'accessor-pairs': 'error',
  'arrow-body-style': 'off', // This rule is not flexible enough
  'block-scoped-var': 'error',
  'camelcase': 'off', // Sometimes using camelcase + underscore, as in 'elapsedTime_ms'
  'capitalized-comments': 'off', // I think it is unnecessary because an error will occur even when commenting out the temporary source code.
  'class-methods-use-this': 'off', // It is difficult to use because it is also affected by the implements method. It's not a very useful rule.
  'complexity': 'off', // I don't know the proper value
  'consistent-return': 'error',
  'consistent-this': [ 'error', 'self' ],
  'curly': 'off', // I think that curly braces can be omitted only when writing consecutive if statements that have only one statement. But this setting does not have it
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  'dot-notation': 'error',
  'eqeqeq': 'error',
  'func-name-matching': 'error',
  'func-names': 'off', // I think it's redundant to even name the callback
  'func-style': 'off', // Arrow functions and function declarations have different meanings. Choose the appropriate one each time
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'error',
  'id-denylist': 'off', // Decided it wasn't important enough to go through the trouble of creating a list of inappropriate names
  'id-length': 'off', // It should be changed depending on the project. So by default 'off'
  'id-match': 'off', // I prefer compound syntax like "commandData_base64". Therefore, the regular expression becomes complicated. You may enable this feature if eslint is able to edit the comments on error messages
  'init-declarations': 'off', // I think I should set the initial value when needed
  'logical-assignment-operators': 'error',
  'max-classes-per-file': 'off',
  'max-depth': 'off', // I don't know the proper value
  'max-lines': 'off', // I think that file division should not be done by the number of lines
  'max-lines-per-function': 'off', // I think that function division should not be done by the number of rows
  'max-nested-callbacks': 'off', // Same reason as max-depth
  'max-params': 'off', // I don't know the proper value
  'max-statements': 'off', // Same reason as max-lines-per-function
  'new-cap': 'off', // Whether it starts with a capital letter or not depends on the project. This setting is a hindrance when using other projects
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-console': 'off', // I don't think this setting is needed. This is because console.log may be used even when not debugging
  'no-continue': 'off', // I think it's more readable to use 'continue' with an unhandled pattern like type-guards
  'no-delete-var': 'error',
  'no-div-regex': 'error',
  'no-else-return': 'error',
  'no-empty': [ 'error', { allowEmptyCatch: true } ],
  'no-empty-function': 'off', // Use an empty function when using the noop function. Using a library will solve this problem, but there is no need to make it a rule.
  'no-empty-static-block': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-label': 'error',
  'no-global-assign': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-inline-comments': 'off', // Same reason as line-comment-position
  'no-invalid-this': 'off', // I think it's awkward to get an error when using "this" setted in the callback.
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-magic-numbers': 'off', // I think that it becomes difficult to read if the commonly used numbers such as 0 and -1 are restricted
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-object-constructor': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-plusplus': 'off', // Decided that in many cases it would be difficult to see without this syntax
  'no-proto': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-restricted-exports': 'off', // Decided it wasn't important enough to go through the trouble of creating a list of inappropriate names
  'no-restricted-globals': 'error',
  'no-restricted-imports': 'off', // It should be changed depending on the project. So by default 'off'
  'no-restricted-properties': 'off',
  'no-restricted-syntax': 'off', // No clear reason to set. If set, it should be reset for each project
  'no-return-assign': 'error',
  'no-script-url': 'error',
  'no-sequences': 'error',
  'no-shadow': 'off', // Utility functions that are used only with that function often deal with the same value, and in that case, we decided it would be less confusing to use the same name
  'no-shadow-restricted-names': 'error',
  'no-ternary': 'off', // There is a problem that it is difficult for beginners to understand, but I think that once understood, it is easier to understand than 'if' sentences
  'no-throw-literal': 'error',
  'no-undef-init': 'error',
  'no-undefined': 'error',
  'no-underscore-dangle': 'off', // It is common to use underscore for the name of the "baking field" used when defining the "property"
  'no-unneeded-ternary': 'error',
  'no-unused-expressions': 'error',
  'no-unused-labels': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-escape': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'no-warning-comments': 'error',
  'no-with': 'error',
  'object-shorthand': 'error',
  'one-var': 'off', // I think it is better to use one declarator when initializing related variables. Everything else requires a declarator. This setting doesn't have it
  'operator-assignment': 'error',
  'prefer-arrow-callback': 'off', // Frameworks like mocha force the use of function expressions
  'prefer-const': 'error',
  'prefer-destructuring': 'off', // This rule is annoying if a variable with the same name already exists
  'prefer-exponentiation-operator': 'error',
  'prefer-named-capture-group': 'off', // This rule is redundant when dealing with simple regular expressions
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'radix': 'error',
  'require-await': 'error',
  'require-unicode-regexp': 'error',
  'require-yield': 'error',
  'sort-imports': [ 'error', { ignoreDeclarationSort: true } ],
  'sort-keys': 'off', // I think it should be sorted in a logical order. If you don't have any, alphabetical order is preferable, but in that case it is better to use tools
  'sort-vars': 'off', // Same reason as sort-keys
  'strict': 'error',
  'symbol-description': 'error',
  'vars-on-top': 'error',
  'yoda': 'off', // It is easier to read if the inequality signs are aligned. e.g.0 <= foo && foo <= 15

  // Layout & Formatting
  // https://eslint.org/docs/latest/rules/#layout--formatting
  'unicode-bom': 'error',
};

module.exports.styleRules = {
  '@stylistic/js/array-bracket-newline': [ 'error', { multiline: true } ],
  '@stylistic/js/array-bracket-spacing': [ 'error', 'always' ],
  '@stylistic/js/array-element-newline': [ 'error', 'consistent' ],
  '@stylistic/js/arrow-parens': 'error',
  '@stylistic/js/arrow-spacing': 'error',
  '@stylistic/js/block-spacing': 'error',
  '@stylistic/js/brace-style': [ 'error', 'stroustrup' ],
  '@stylistic/js/comma-dangle': [ 'error', 'always-multiline' ],
  '@stylistic/js/comma-spacing': [ 'error', { before: false, after: true } ],
  '@stylistic/js/comma-style': [ 'error', 'last' ],
  '@stylistic/js/computed-property-spacing': [ 'error', 'never' ],
  '@stylistic/js/dot-location': [ 'error', 'property' ],
  '@stylistic/js/eol-last': [ 'error', 'always' ],
  '@stylistic/js/func-call-spacing': [ 'error', 'never' ],
  '@stylistic/js/function-call-argument-newline': [ 'error', 'consistent' ],
  '@stylistic/js/function-call-spacing': 'error',
  '@stylistic/js/function-paren-newline': 'error',
  '@stylistic/js/generator-star-spacing': [ 'error', { before: false, after: true } ],
  '@stylistic/js/implicit-arrow-linebreak': [ 'error', 'beside' ],
  '@stylistic/js/indent': [ 'error', indentSize, { SwitchCase: 1 } ],
  '@stylistic/js/jsx-quotes': 'error',
  '@stylistic/js/key-spacing': 'error',
  '@stylistic/js/keyword-spacing': 'error',
  '@stylistic/js/line-comment-position': 'off', // I think that the easy-to-see position will change depending on the situation
  '@stylistic/js/linebreak-style': [ 'error', 'windows' ], // Because I use Windows only
  '@stylistic/js/lines-around-comment': 'off', // Same reason as line-comment-position
  '@stylistic/js/lines-between-class-members': 'off', // Appropriate line breaks should be considered on a case-by-case basis
  '@stylistic/js/max-len': 'off', // It may be better to fit on one line except in extreme cases
  '@stylistic/js/max-statements-per-line': 'off', // I don't know the proper value
  '@stylistic/js/multiline-comment-style': 'off', // No rules for comments. They should be in a format that is easy to read each time
  '@stylistic/js/multiline-ternary': 'off', // I think that you should decide whether to start a line break depending on the number of columns, but that setting does not exist
  '@stylistic/js/new-parens': 'error',
  '@stylistic/js/newline-per-chained-call': 'off', // Readability depends on the situation and shouldn't be enforced
  '@stylistic/js/no-confusing-arrow': 'error',
  '@stylistic/js/no-extra-parens': 'off', // Readability should not be enforced as it depends on the situation
  '@stylistic/js/no-extra-semi': 'error',
  '@stylistic/js/no-floating-decimal': 'error',
  '@stylistic/js/no-mixed-operators': 'error',
  '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/js/no-multi-spaces': [ 'error', { ignoreEOLComments: true } ],
  '@stylistic/js/no-multiple-empty-lines': [ 'error', { max: 2 } ],
  '@stylistic/js/no-tabs': 'error',
  '@stylistic/js/no-trailing-spaces': 'off', // Follow id-match
  '@stylistic/js/no-whitespace-before-property': 'error',
  '@stylistic/js/nonblock-statement-body-position': 'error',
  '@stylistic/js/object-curly-newline': [ 'error', { multiline: true, consistent: true } ],
  '@stylistic/js/object-curly-spacing': [ 'error', 'always' ],
  '@stylistic/js/object-property-newline': [ 'error', { allowMultiplePropertiesPerLine: true } ],
  '@stylistic/js/one-var-declaration-per-line': 'off', // The appropriateness of line breaks will vary from case to case
  '@stylistic/js/operator-linebreak': [ 'error', 'before' ],
  '@stylistic/js/padded-blocks': [ 'error', 'never' ],
  '@stylistic/js/padding-line-between-statements': 'off', // I think a line break needs a logical reason. Automatic line breaks can't cover everything
  '@stylistic/js/quote-props': [ 'error', 'consistent' ],
  '@stylistic/js/quotes': [ 'error', 'single', { allowTemplateLiterals: true } ],
  '@stylistic/js/rest-spread-spacing': 'error',
  '@stylistic/js/semi': [ 'error', 'always' ],
  '@stylistic/js/semi-spacing': 'error',
  '@stylistic/js/semi-style': 'error',
  '@stylistic/js/space-before-blocks': 'error',
  '@stylistic/js/space-before-function-paren': [ 'error', 'never' ],
  '@stylistic/js/space-in-parens': 'error',
  '@stylistic/js/space-infix-ops': 'error',
  '@stylistic/js/space-unary-ops': 'error',
  '@stylistic/js/switch-colon-spacing': 'error',
  '@stylistic/js/template-curly-spacing': 'error',
  '@stylistic/js/template-tag-spacing': 'error',
  '@stylistic/js/wrap-iife': 'error',
  '@stylistic/js/wrap-regex': 'error',
  '@stylistic/js/yield-star-spacing': 'error',
};

module.exports.config = {
  files: [ '**/*.js' ],
  plugins: {
    '@stylistic/js': stylisticJs,
  },
  rules: {
    ...module.exports.lintRules,
    ...module.exports.styleRules,
  },
};
