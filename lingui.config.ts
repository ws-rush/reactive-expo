/** @type {import('@lingui/conf').LinguiConfig} */
export default {
  catalogs: [
    {
      include: ['src'],
      path: '<rootDir>/src/locales/{locale}',
    },
  ],
  fallbackLocales: {
    default: 'en',
  },
  format: 'po',
  locales: ['en', 'ar'],
  sourceLocale: 'en',
};
