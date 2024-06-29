import '~/global.css';
import { Stack, Slot } from 'expo-router';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { I18nProvider } from '@lingui/react';
import i18n from '~/globals/i18n';
import mode from '~/globals/mode';
// import { Text } from 'react-native'

(async () => {
  i18n.set(await i18n.loadLocale());
  mode.set(await mode.loadMode());
})();

export default function Layout() {
  const { colorScheme } = useColorScheme();

  return (
    <I18nProvider
      i18n={i18n}
      // defaultComponent={Text}
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack />
      </ThemeProvider>
    </I18nProvider>
  );
}
