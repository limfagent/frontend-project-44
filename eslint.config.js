import stylistic from '@stylistic/eslint-plugin';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: 'readonly', // Говорим линтеру: "Консоль существует, ее можно использовать!"
        process: 'readonly',
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      'no-unused-vars': 'warn',
      'no-console': 'off', // Разрешаем использовать console.log
      'no-undef': 'error',
    },
  },
];

