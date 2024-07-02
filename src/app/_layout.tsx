import '~/global.css';
import { Stack, Slot } from 'expo-router';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { I18nProvider } from '@lingui/react';
import i18n from '~/globals/i18n';
import mode from '~/globals/mode';
// import { Text } from 'react-native'
import { useFonts, Exo_400Regular, Exo_700Bold, Exo_900Black } from '@expo-google-fonts/exo'
import { SplashScreen } from 'expo-router'
import { useEffect } from 'react';

// Prevent the splash screen from auto-hiding, needed only with call of SplashScreen.hideAsync() down below
SplashScreen.preventAutoHideAsync();

(async () => {
  i18n.set(await i18n.loadLocale());
  mode.set(await mode.loadMode());
})();

export default function Layout() {
  const { colorScheme } = useColorScheme();

  // after use font, add it to `tailwind.config.js` to use it
  const [fontsLoaded, fontError] = useFonts({
    Exo_400Regular,
    Exo_700Bold,
    Exo_900Black
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // hide the splash screen after fonts are loaded (or an error was returned) and the UI is ready
      setTimeout(() => SplashScreen.hideAsync(), 2000)
    }
  }, [fontsLoaded])

  // Prevent rendering until fonts are loaded or an error was returned
  if (!fontsLoaded && !fontError) return null

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
