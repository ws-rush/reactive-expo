import { useLocalSearchParams, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import Head from 'expo-router/head';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Head>
        <title>Details</title>
      </Head>
      <SafeAreaView>
        <Container>
          <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
        </Container>
      </SafeAreaView>
    </>
  );
}
