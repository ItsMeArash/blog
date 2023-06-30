module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
