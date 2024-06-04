import typescriptParser from '@typescript-eslint/parser';

export default {
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json',
    },
  },
  plugins: {
    '@typescript-eslint': {},
  },
  ignores: ['node_modules/**', '/**/node_modules/*', 'dist/**', 'doc/**'],
  files: ['**/*.js', '**/*.ts', '**/*.tsx'],
  rules: {
    "semi": "error",
    "prefer-const": "error"
  }
};