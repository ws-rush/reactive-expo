import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SettingsScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold">Settings Screen</Text>
      <Button title="Open Modal" onPress={() => navigation.navigate('details' as never)} />
    </View>
  );
}
