import { defineConfig } from '@lingui/cli';

export default defineConfig({
  catalogs: [
    {
      include: ['src'],
      path: '<rootDir>/src/locales/{locale}.js',
    },
  ],
  fallbackLocales: {
    default: 'en',
  },
  format: 'po',
  locales: ['en', 'ar'],
  sourceLocale: 'en',
});
