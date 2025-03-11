import { I18n, i18n, Messages } from '@lingui/core';
import { getLocales } from 'expo-localization';
import { I18nManager, Platform } from 'react-native';
import { reloadAsync } from 'expo-updates';
import { messages as arMessages } from '~/locales/ar.js';
import { messages as enMessages } from '~/locales/en.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Locale = {
  direction: 'rtl' | 'ltr';
  label: string;
  locale: string;
  messages: Messages;
};

interface LocaleInterface {
  get availableLocales(): string[];
  localesData: Record<string, Locale>;
  set: (value: string) => void;
  toggleLocales: () => void;
  loadLocale(): Promise<string>;
  setRTL(option: boolean): void;
}

const locale: LocaleInterface = {
  async setRTL(isRTL: boolean) {
    if (Platform.OS === 'web') {
      globalThis.window.document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    } else {
      await I18nManager.allowRTL(isRTL);
      await I18nManager.forceRTL(isRTL);
    }
  },
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
    if (direction === 'rtl') await this.setRTL(true);
    else await this.setRTL(false);

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
