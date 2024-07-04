import { Stack, Link } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { Alert, Appearance, I18nManager, Text } from 'react-native';
import { Trans, t } from '@lingui/macro';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import i18n from '~/globals/i18n';
import { useState } from 'react';
import mode from '~/globals/mode';

export default function Home() {
  const [state, setState] = useState(0);
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <>
      <Stack.Screen options={{ title: i18n._('Home') }} />
      <Container>
        <ScreenContent path="app/index.tsx" title={<Trans>Home</Trans>} />
        {I18nManager.isRTL ? (
          <Text className="text-black dark:text-white">it is rtl</Text>
        ) : (
          <Text className="text-black dark:text-white">it is ltr</Text>
        )}
        <Link href={{ pathname: '/(tabs)/home/details', params: { name: 'Dan' } }} asChild>
          <Button title={<Trans>Show Details</Trans>} />
        </Link>
        <Text className="text-black dark:text-white"> color: {colorScheme}</Text>
        <Button
          title={`${state} - ${I18nManager.isRTL}`}
          onPress={() => setState((prev) => prev + 1)}
        />
        <Text className="text-black dark:text-white">{mode.colorScheme}</Text>
        <Button title={<Trans>light</Trans>} onPress={() => mode.set('light')} />
        <Button title={<Trans>dark</Trans>} onPress={() => mode.set('dark')} />
        <Button title={<Trans>system</Trans>} onPress={() => mode.set('system')} />
        <Text className="text-black dark:text-white">{i18n.locale}</Text>
        <Button title={<Trans>English</Trans>} onPress={() => i18n.set('en')} />
        <Button title={<Trans>Arabic</Trans>} onPress={() => i18n.set('ar')} />
      </Container>
    </>
  );
}
