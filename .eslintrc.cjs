module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:perfectionist/recommended-natural',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'perfectionist'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: ['react', 'builtin', 'external', 'internal'],
        'custom-groups': {
          value: {
            react: ['react', 'react-*'],
          },
        },
        'newlines-between': 'always',
        'internal-pattern': [
          '@assets/**',
          '@components/**',
          '@lib/**',
          '@models/**',
          '@pages/**',
          '@src/**',
        ],
      },
    ],
  },
};
