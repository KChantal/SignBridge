module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prefer-arrow',
    'prettier',
  ],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    // Prefer arrow functions
    'prefer-arrow-callback': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // React specific rules
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    // Other preferences
    semi: ['error', 'always'],
    indent: ['error', 2],
    // Ensure JSX formatting aligns with Prettier
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
