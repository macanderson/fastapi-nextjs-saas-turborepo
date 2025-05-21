import type { Linter } from 'eslint';
import js from '@eslint/js';
import next from 'eslint-config-next';
import tailwindcss from 'eslint-plugin-tailwindcss';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

const config: Linter.FlatConfig[] = [
  js.configs.recommended,
  ...next,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      tailwindcss,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'tailwindcss/no-custom-classname': 'off',
    },
  },
];

export default config;
