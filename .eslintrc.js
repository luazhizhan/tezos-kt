module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx',] }],
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'no-console': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'linebreak-style': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-alert': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
