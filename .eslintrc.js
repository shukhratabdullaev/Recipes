module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript/base',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      js: true,
      jsx: true,
      ts: true,
      tsx: true
    }
  },
  rules: {
    'react-in-jsx-scope': 0,
    'default-param-last': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-shadow': 'off',
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    'no-use-before-define': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
      }
    ],
    'max-len': [
      'error',
      {
        code: 400
      }
    ],
    'react/prop-types': 0,
    'import/extensions': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'no-console': 1,
    'consistent-return': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'import/no-mutable-exports': 0,
    'max-classes-per-file': 0,
    // 'linebreak-style': 'off',
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    'import/order': 0,
    'react/no-unknown-property': 1
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
