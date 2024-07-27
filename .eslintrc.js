// .eslintrc.js
module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    // Disable specific rules project-wide
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'], // Apply rules for TypeScript files only
      rules: {
        // Allow type differences
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
