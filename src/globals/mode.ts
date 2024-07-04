import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance, ColorSchemeName, Platform } from 'react-native';

export type Mode = 'system' | ColorSchemeName;

const mode = {
  setColorScheme(_mode: ColorSchemeName) {
    if (Platform.OS === 'web') {
      switch (_mode) {
        case 'dark':
          globalThis.window?.document.documentElement.classList.add('dark');
          break;
        default:
          globalThis.window?.document.documentElement.classList.remove('dark');
      }
    } else Appearance.setColorScheme(_mode);
  },
  set(_mode: Mode) {
    switch (_mode) {
      case 'system':
        this.setColorScheme(null);
        AsyncStorage.removeItem('mode');
        break;
      case 'light':
        this.setColorScheme('light');
        AsyncStorage.setItem('mode', 'light');
        break;
      case 'dark':
        this.setColorScheme('dark');
        AsyncStorage.setItem('mode', 'dark');
        break;
    }
  },
  toggleMode() {
    const modes: Mode[] = ['system', 'light', 'dark'];
    const newMode = modes[(modes.indexOf(mode.value) + 1) % modes.length];
    mode.set(newMode);
  },
  toggleColorScheme() {
    const colorSchemes: ColorSchemeName[] = ['light', 'dark'];
    const newColorScheme =
      colorSchemes[(colorSchemes.indexOf(mode.colorScheme) + 1) % colorSchemes.length];
    mode.set(newColorScheme);
  },
  async loadMode() {
    const storedMode = ((await AsyncStorage.getItem('mode')) as Mode) || 'system';
    this.value = storedMode;
    return storedMode;
  },
  value: 'system' as Mode,
  get colorScheme() {
    return Appearance.getColorScheme();
  },
};

// use `mode` directly to set color, to get color use it or hook `const { colorScheme } = useColorScheme()` from nativewind
export default mode;
