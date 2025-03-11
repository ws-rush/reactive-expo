import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer
      screenOptions={({ route }) => {
        if (route.name === '(tabs)') return { headerShown: false, drawerLabel: 'Home' };
        return {};
      }}
    />
  );
}
