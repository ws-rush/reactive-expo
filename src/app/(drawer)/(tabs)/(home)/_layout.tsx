import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={({ route }) => {
        if (route.name === 'notifications') return { presentation: 'modal', title: 'Details' };
        else if (route.name === 'index') return { title: 'Home' };
        return {};
      }}
    />
  );
}
