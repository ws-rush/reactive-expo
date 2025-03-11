import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();
  return (
      <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold">Settings Screen</Text>
      <Button title="Open Modal" onPress={() => router.push('/(drawer)/(tabs)/(home)/details' as never)} />
    </View>
  );
}
