import { Stack, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Details', headerShown: false }} />
      <SafeAreaView>
        <Container>
          <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
        </Container>
      </SafeAreaView>
    </>
  );
}
