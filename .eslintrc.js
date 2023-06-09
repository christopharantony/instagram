module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-shadow': 0,
    'no-console': 2,
    'react/jsx-key': 1,
    'import/no-cycle': 0,
    'arrow-body-style': 2,
    'react/prop-types': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 2,
    'no-empty-character-class': 2,
    'no-use-before-define': 0,
    'no-irregular-whitespace': 2,
    camelcase: 2,
    'block-spacing': 2,
    'no-unreachable': 2,
    'no-underscore-dangle': 0,
    'react/button-has-type': 0,
    'react/no-children-prop': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-array-index-key': 0,
    'react/no-unused-prop-types': 1,
    'no-promise-executor-return': 0,
    'no-unsafe-optional-chaining': 1,
    'react/require-default-props': 0,
    'react/no-unescaped-entities': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/destructuring-assignment': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-unstable-nested-components': 0,
    'react/function-component-definition': 0,
    'react/jsx-no-constructed-context-values': 0,
    'jsx-a11yclick-events-have-key-events': 0,
    'jsx-a11y\no-noninteractive-element-interactions': 0,
    'react/no-unknown-property': 0,
    'react-hooks/exhaustive-deps': 0,
    'default-param-last': 0,
    'func-names': 0,
    'no-unused-vars': [
      2,
      {
        ignoreRestSiblings: false,
      },
    ],
    'prefer-destructuring': [
      1,
      {
        object: true,
        array: false,
      },
    ],
  },
};
