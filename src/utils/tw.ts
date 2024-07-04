import { I18nManager, Platform } from 'react-native';

export function tw(strings: TemplateStringsArray, ...values: any[]) {
  // Combine the string literals and the values into a single string
  let combinedString = strings.reduce((result, string, i) => {
    return result + string + (values[i] || '');
  }, '');

  // Split the combined string into an array of classes
  let classes = combinedString.split(' ');

  // Filter out classes that start with "rtl:"
  let filteredClasses = classes.filter((cls) => {
    if (Platform.OS !== 'web') return !cls.startsWith(I18nManager.isRTL ? 'ltr:' : 'rtl:');
    else return true;
  });

  // Join the filtered classes back into a single string
  return filteredClasses.join(' ');
}
