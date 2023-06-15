module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ss', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'no-var-requires': 0,
        'react/button-has-type': 'off',
        'import/extensions': 'off',
        'no-unused-vars': 'warn',
        'no-use-before-define': 'off',
        'no-shadow': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'warn',
    },
    globals: {
        __IS_DEV__: true,
    },
};
