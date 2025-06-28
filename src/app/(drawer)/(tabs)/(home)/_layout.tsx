import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="details" options={{ presentation: 'modal', title: 'Details' }} />
      </Stack>
  );
}

// screenOptions={({ route }) => {
//         if (route.name === 'notifications') return { presentation: 'modal', title: 'Details' };
//         else if (route.name === 'index') return { title: 'Home' };
//         return {};
//}}