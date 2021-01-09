const indentSize = 2;

module.exports = {
  pluginName: null,
  indentSize,
  rules: {
    // Possible Errors
    // https://eslint.org/docs/rules/#possible-errors
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off', // I don't think this setting is needed. This is because console.log may be used even when not debugging
    'no-constant-condition': [ 'error',  { 'checkLoops': false } ], // Allow while (true)
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': [ 'error', { 'allowEmptyCatch': true } ],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off', // Readability should not be enforced as it depends on the situation
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'off',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    // Best Practices
    // https://eslint.org/docs/rules/#best-practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off', // It is difficult to use because it is also affected by the implements method. It's not a very useful rule.
    'complexity': 'off', // I don't know the proper value
    'consistent-return': 'error',
    'curly': 'off', // I think that curly braces can be omitted only when writing consecutive if statements that have only one statement. But this setting does not have it
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': [ 'error', 'property' ],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'off', // Use an empty function when using the noop function. Using a library will solve this problem, but there is no need to make it a rule.
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off', // I think it's awkward to get an error when using "this" setted in the callback.
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off', // I think that it becomes difficult to read if the commonly used numbers such as 0 and -1 are restricted
    'no-multi-spaces': [ 'error', { 'ignoreEOLComments': true } ],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'prefer-named-capture-group': 'off', // This rule is redundant when dealing with simple regular expressions
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'radix': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    'yoda': 'off', // It is easier to read if the inequality signs are aligned. e.g.0 <= foo && foo <= 15

    // Strict Mode
    // https://eslint.org/docs/rules/#strict-mode
    'strict': 'error',

    // Variables
    // https://eslint.org/docs/rules/#variables
    'init-declarations': 'off', // I think I should set the initial value when needed
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'error',
    'no-shadow': 'off', // Utility functions that are used only with that function often deal with the same value, and in that case, we decided it would be less confusing to use the same name
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': [ 'error', { args: 'none' } ],
    'no-use-before-define': [ 'error', { 'classes': false } ],

    // Node.js and CommonJS
    // https://eslint.org/docs/rules/#node-js-and-commonjs
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off', // I don't know the alternative to "process.env".
    'no-process-exit': 'off', // I don't know of any other means of returning status code
    'no-restricted-modules': 'off', // It should be changed depending on the project. So by default 'off'
    'no-sync': 'error',

    // Stylistic Issues
    // https://eslint.org/docs/rules/#stylistic-issues
    'array-bracket-newline': [ 'error', { multiline: true } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'array-element-newline': [ 'error', 'consistent' ],
    'block-spacing': 'error',
    'brace-style': [ 'error', 'stroustrup' ],
    'camelcase': 'off', // Sometimes using camelcase + underscore, as in 'elapsedTime_ms'
    'capitalized-comments': 'off', // I think it is unnecessary because an error will occur even when commenting out the temporary source code.
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'comma-style': [ 'error', 'last' ],
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-this': [ 'error', 'self' ],
    'eol-last': [ 'error', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    'func-name-matching': 'error',
    'func-names': 'off', // I think it's redundant to even name the callback
    'func-style': 'error',
    'function-call-argument-newline': [ 'error', 'consistent' ],
    'function-paren-newline': 'error',
    'id-denylist': 'off', // Decided it wasn't important enough to go through the trouble of creating a list of inappropriate names
    'id-length': 'off', // It should be changed depending on the project. So by default 'off'
    'id-match': 'off', // I prefer compound syntax like "commandData_base64". Therefore, the regular expression becomes complicated. You may enable this feature if eslint is able to edit the comments on error messages
    'implicit-arrow-linebreak': [ 'error', 'beside' ],
    'indent': [ 'error', indentSize, { SwitchCase: 1 } ],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off', // I think that the easy-to-see position will change depending on the situation
    'linebreak-style': [ 'error', 'windows' ], // Because I use Windows only
    'lines-around-comment': 'off', // Same reason as line-comment-position
    'lines-between-class-members': [ 'error', 'never' ],
    'max-depth': 'off', // I don't know the proper value
    'max-len': 'off', // It may be better to fit on one line except in extreme cases
    'max-lines': 'off', // I think that file division should not be done by the number of lines
    'max-lines-per-function': 'off', // I think that function division should not be done by the number of rows
    'max-nested-callbacks': 'off', // Same reason as max-depth
    'max-params': 'off', // I don't know the proper value
    'max-statements': 'off', // Same reason as max-lines-per-function
    'max-statements-per-line': 'off', // I don't know the proper value
    'multiline-comment-style': 'off', // JsDoc comments should be block comments, other comments should be line comments, but that setting does not exist
    'multiline-ternary': 'off', // I think that you should decide whether to start a line break depending on the number of columns, but that setting does not exist
    'new-cap': 'off', // Whether it starts with a capital letter or not depends on the project. This setting is a hindrance when using other projects
    'new-parens': 'error',
    'newline-per-chained-call': 'off', // Readability depends on the situation and shouldn't be enforced
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'off', // I think it's more readable to use 'continue' with an unhandled pattern like type-guards
    'no-inline-comments': 'off', // Same reason as line-comment-position
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 2 } ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off', // Decided that in many cases it would be difficult to see without this syntax
    'no-restricted-syntax': 'off', // No clear reason to set. If set, it should be reset for each project
    'no-tabs': 'error',
    'no-ternary': 'off', // There is a problem that it is difficult for beginners to understand, but I think that once understood, it is easier to understand than 'if' sentences
    'no-trailing-spaces': 'off', // Follow id-match
    'no-underscore-dangle': 'off', // It is common to use underscore for the name of the "baking field" used when defining the "property"
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': [ 'error', { multiline: true } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [ 'error', { allowMultiplePropertiesPerLine: true } ],
    'one-var': 'off', // I think it is better to use one declarator when initializing related variables. Everything else requires a declarator. This setting doesn't have it
    'one-var-declaration-per-line': 'off', // Same reason as 'one-var'
    'operator-assignment': 'error',
    'operator-linebreak': [ 'error', 'before' ],
    'padded-blocks': [ 'error', 'never' ],
    'padding-line-between-statements': 'off', // I think a line break needs a logical reason. Automatic line breaks can't cover everything
    // [
    //   'error',
    //   { blankLine: 'always', prev: 'directive', next: '*' },
    //   { blankLine: 'any', prev: 'directive', next: 'directive' },
    //   { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
    //   { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ] },
    // ],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': [ 'error', 'consistent' ],
    'quotes': [ 'error', 'single', { allowTemplateLiterals: true } ],
    'semi': [ 'error', 'always' ],
    'semi-spacing': 'error',
    'semi-style': 'error',
    'sort-keys': 'off', // I think it should be sorted in a logical order. If you don't have any, alphabetical order is preferable, but in that case it is better to use tools
    'sort-vars': 'off', // Same reason as sort-keys
    'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': [ 'error', 'always', { block: { balanced: true } } ],
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'error',

    // ECMAScript 6
    // https://eslint.org/docs/rules/#ecmascript-6
    'arrow-body-style': 'off', // This rule is not flexible enough
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': [ 'error', { before: false, after: true } ],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-exports': 'off', // Decided it wasn't important enough to go through the trouble of creating a list of inappropriate names
    'no-restricted-imports': 'off', // It should be changed depending on the project. So by default 'off'
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off', // This rule is annoying if a variable with the same name already exists
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': [ 'error', { ignoreDeclarationSort: true } ],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',
  },
};
