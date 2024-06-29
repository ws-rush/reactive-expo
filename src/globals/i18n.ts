import { I18n, i18n } from '@lingui/core';
import { getLocales } from 'expo-localization';
import { I18nManager, Platform, NativeModules } from 'react-native';
import { reloadAsync } from 'expo-updates';
import { messages as arMessages } from '~/locales/ar.js';
import { messages as enMessages } from '~/locales/en.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Locale = {
  direction: 'rtl' | 'ltr';
  label: string;
  locale: string;
  messages: Object;
};

interface LocaleInterface {
  get availableLocales(): string[];
  localesData: Record<string, Locale>;
  set: (value: string) => void;
  toggleLocales: () => void;
  loadLocale(): Promise<string>;
}

const locale: LocaleInterface = {
  get availableLocales() {
    return Object.keys(this.localesData);
  },
  localesData: {
    ar: {
      direction: 'rtl',
      label: 'العربية',
      locale: 'ar',
      messages: arMessages,
    },
    en: {
      direction: 'ltr',
      label: 'English',
      locale: 'en',
      messages: enMessages,
    },
  },
  async set(value: string) {
    // load and activate locale
    const { messages, direction } = this.localesData[value];
    i18n.load(value, messages);
    i18n.activate(value);

    // reload app
    if (direction === 'rtl') {
      await I18nManager.allowRTL(true);
      await I18nManager.forceRTL(true);
    } else {
      await I18nManager.allowRTL(false);
      await I18nManager.forceRTL(false);
    }

    if ((await locale.loadLocale()) !== value) {
      // set app default lang done from app settings
      await AsyncStorage.setItem('locale', value);

      if (Platform.OS === 'ios' || Platform.OS === 'android') reloadAsync();
      else if (Platform.OS === 'web') window.location.reload();
    }
  },
  async toggleLocales() {
    const locales = locale.availableLocales;
    const newLocale = locales[(locales.indexOf(i18n.locale) + 1) % locales.length];

    await locale.set(newLocale);
  },
  async loadLocale() {
    return (await AsyncStorage.getItem('locale')) || getLocales()[0].languageCode || 'en'; // from local storage or from system
  },
};

Object.assign(i18n, locale);

// should passed to I18nProvider
// can used directly or from [`uselingui` hook](https://lingui.dev/ref/react#uselingui)
export interface Internationalization extends I18n, LocaleInterface {}
export default i18n as Internationalization;
