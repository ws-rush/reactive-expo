import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeLayout() {
  // add left button to show drawer
  return (
    <Tabs>
      <Tabs.Screen name="(home)" options={{
        title: 'Home', headerShown: false, tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Ionicons name="home" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="explore" options={{
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Ionicons name="search" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="notifications" options={{
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Ionicons name="notifications" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="settings" options={{
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Ionicons name="settings" size={size} color={color} />
        )
      }} />
    </Tabs>
  );
}