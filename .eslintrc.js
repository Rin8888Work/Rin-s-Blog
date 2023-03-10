module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-filename-extension': 'off',
    'linebreak-style': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'key-spacing': 'off',
    'object-curly-spacing': [2, 'always'],
    'no-undef': 1,
    camelcase: 'off',
    radix: 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'max-lines-per-function': ['error', 500],
    complexity: ['error', 20],
    'react/prop-types': 0,
    '@next/next/no-img-element': 'off',
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/display-name': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'prefer-const': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
