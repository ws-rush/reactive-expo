import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeLayout() {
  // add left button to show drawer
  return (
    <Tabs
      screenOptions={({ route }) => {
        let iconName: 'home' | 'search' | 'notifications' | 'settings';
        const options: any = {};

        switch (route.name) {
          case '(home)':
            iconName = 'home';
            // Hide the tab header for the home tab, allowing the nested stack header to show
            options.headerShown = false;
            options.title = 'Home';
            break;
          case 'explore':
            iconName = 'search';
            break;
          case 'notifications':
            iconName = 'notifications';
            break;
          case 'settings':
            iconName = 'settings';
            break;
          default:
            break;
        }

        return {
          ...options,
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
        };
      }}
    />
  );
}
