module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  extends: [
    'airbnb-base',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    '@babel',
    'jsx-a11y',
    'react',
  ],
  rules: {
    // Allow deprecated react lifecycle's methods, eg: UNSAFE_componentWillMount
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false,
        allow: ['^UNSAFE_'],
      },
    ],
  },
};
