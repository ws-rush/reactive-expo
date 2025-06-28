import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false, drawerLabel: 'Home' }} />
    </Drawer>
      </GestureHandlerRootView>
  );
}