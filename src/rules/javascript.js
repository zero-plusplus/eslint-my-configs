/* eslint-disable no-dupe-keys */
const indentSize = 2;

module.exports = {
  plugins: [ 'unused-imports' ],
  indentSize: 2,
  rules: {

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
    'no-constant-condition': [ 'error', { 'checkLoops': false } ], // Allow while (true)
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
    'no-new-symbol': 'error',
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
    'no-use-before-define': [ 'error', { 'classes': false } ],
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
    'func-style': 'error',
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
    'multiline-comment-style': 'off', // JsDoc comments should be block comments, other comments should be line comments, but that setting does not exist
    'new-cap': 'off', // Whether it starts with a capital letter or not depends on the project. This setting is a hindrance when using other projects
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'off', // I don't think this setting is needed. This is because console.log may be used even when not debugging
    'no-continue': 'off', // I think it's more readable to use 'continue' with an unhandled pattern like type-guards
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty': [ 'error', { 'allowEmptyCatch': true } ],
    'no-empty-function': 'off', // Use an empty function when using the noop function. Using a library will solve this problem, but there is no need to make it a rule.
    'no-empty-static-block': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
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
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
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
    'no-return-await': 'error',
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
    'no-warning-comments': 'error',
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': 'off', // I think it is better to use one declarator when initializing related variables. Everything else requires a declarator. This setting doesn't have it
    'one-var-declaration-per-line': 'off', // Same reason as 'one-var'
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
    'quote-props': [ 'error', 'consistent' ],
    'radix': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'sort-imports': [ 'error', { ignoreDeclarationSort: true } ],
    'sort-keys': 'off', // I think it should be sorted in a logical order. If you don't have any, alphabetical order is preferable, but in that case it is better to use tools
    'sort-vars': 'off', // Same reason as sort-keys
    'spaced-comment': [ 'error', 'always', { block: { balanced: true } } ],
    'strict': 'error',
    'symbol-description': 'error',
    'vars-on-top': 'error',
    'yoda': 'off', // It is easier to read if the inequality signs are aligned. e.g.0 <= foo && foo <= 15

    // Layout & Formatting
    // https://eslint.org/docs/latest/rules/#layout--formatting
    'array-bracket-newline': [ 'error', { multiline: true } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'array-element-newline': [ 'error', 'consistent' ],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': [ 'error', 'stroustrup' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'comma-style': [ 'error', 'last' ],
    'computed-property-spacing': [ 'error', 'never' ],
    'dot-location': [ 'error', 'property' ],
    'eol-last': [ 'error', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    'function-call-argument-newline': [ 'error', 'consistent' ],
    'function-paren-newline': 'error',
    'generator-star-spacing': [ 'error', { before: false, after: true } ],
    'implicit-arrow-linebreak': [ 'error', 'beside' ],
    'indent': [ 'error', indentSize, { SwitchCase: 1 } ],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off', // I think that the easy-to-see position will change depending on the situation
    'linebreak-style': [ 'error', 'windows' ], // Because I use Windows only
    'lines-around-comment': 'off', // Same reason as line-comment-position
    'lines-between-class-members': [ 'error', 'never' ],
    'max-len': 'off', // It may be better to fit on one line except in extreme cases
    'max-statements-per-line': 'off', // I don't know the proper value
    'multiline-ternary': 'off', // I think that you should decide whether to start a line break depending on the number of columns, but that setting does not exist
    'new-parens': 'error',
    'newline-per-chained-call': 'off', // Readability depends on the situation and shouldn't be enforced
    'no-extra-parens': 'off', // Readability should not be enforced as it depends on the situation
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': [ 'error', { 'ignoreEOLComments': true } ],
    'no-multiple-empty-lines': [ 'error', { max: 2 } ],
    'no-tabs': 'error',
    'no-trailing-spaces': 'off', // Follow id-match
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': [ 'error', { multiline: true, consistent: true } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [ 'error', { allowMultiplePropertiesPerLine: true } ],
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
    'quotes': [ 'error', 'single', { allowTemplateLiterals: true } ],
    'rest-spread-spacing': 'error',
    'semi': [ 'error', 'always' ],
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-iife': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',


    // Deprecated
    // https://eslint.org/docs/latest/rules/#deprecated
    // 'callback-return'
    // 'global-require'
    // 'handle-callback-err'
    // 'id-blacklist'
    // 'indent-legacy'
    // 'lines-around-directive'
    // 'newline-after-var'
    // 'newline-before-return'
    // 'no-buffer-constructor': 'error',
    // 'no-catch-shadow'
    // 'no-mixed-requires': 'error',
    // 'no-native-reassign'
    // 'no-negated-in-lhs'
    // 'no-new-require': 'error',
    // 'no-path-concat': 'error',
    // 'no-process-env': 'off', // I don't know the alternative to "process.env".
    // 'no-process-exit': 'off', // I don't know of any other means of returning status code
    // 'no-restricted-modules': 'off', // It should be changed depending on the project. So by default 'off'
    // 'no-spaced-func'
    // 'no-sync': 'error',
    // 'prefer-reflect'
    // 'require-jsdoc'
    // 'valid-jsdoc'

    // Removed
    // https://eslint.org/docs/latest/rules/#removed
    // 'generator-star'
    // 'global-strict'
    // 'no-arrow-condition'
    // 'no-comma-dangle'
    // 'no-empty-class'
    // 'no-empty-label'
    // 'no-extra-strict'
    // 'no-reserved-keys'
    // 'no-space-before-semi'
    // 'no-wrap-func'
    // 'space-after-function-name'
    // 'space-after-keywords'
    // 'space-before-function-parentheses'
    // 'space-before-keywords'
    // 'space-in-brackets'
    // 'space-return-throw-case'
    // 'space-unary-word-ops'
    // 'spaced-line-comment'
  },
};
