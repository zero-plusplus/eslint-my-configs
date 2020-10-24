// yarn add -D eslint-plugin-react
module.exports = {
  pluginName: 'react',
  // https://github.com/yannickcr/eslint-plugin-react/tree/master
  rules: {
    'react/boolean-prop-naming': 'off', // This setting will be an imposition of mine preferences
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': [ 'error', 'never' ],
    'react/display-name': 'error',
    'react/forbid-component-props': 'off', // I understand that it helps to avoid complexity, but can this rule continue to be followed when using a component library?
    'react/forbid-dom-props': 'off', // I can't decide which props should be banned or not
    'react/forbid-elements': 'off', // I can't decide which element should be banned or not
    'react/forbid-foreign-prop-types': 'off', // I don't understand the benefits of this rule
    'react/forbid-prop-types': 'off', // I can't decide which props-types should be banned or not
    'react/function-component-definition': 'off', // function-expression and arrow-function should not be enforced because they have different roles
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'off', // It is unlikely that you will use it without knowing that it is dangerous. As such, I think it's redundant as a rule
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off', // It's better to set it up individually
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-read-only-props': 'off', // `Flow` is not using
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'error',
    'react/require-optimization': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'react/state-in-constructor': 'error',
    'react/static-property-placement': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [ 'error', { children: 'always' } ],
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': [ 'error', { extensions: [ '.tsx' ] } ],
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off', // I don't know the proper depth
    'react/jsx-max-props-per-line': 'off', // Readability depends on the situation and should be determined by each individual
    'react/jsx-newline': 'off', // Instead of using blank lines uniformly, I prefer to use them when there is a logical reason to do so
    'react/jsx-no-bind': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 'off', // Sometimes it's better to put all the elements on one line when you put li tags on the page. In that case, this rule may get in the way
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off', // This rule gets in the way if you want to set up common props
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': [ 'error', { shorthandFirst: true, callbacksLast: true, reservedFirst: true } ],
    'react/jsx-space-before-closing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
  },
};
