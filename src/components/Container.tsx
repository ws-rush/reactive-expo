import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = ({ children }: { children: React.ReactNode }) => {
  // return <SafeAreaView className="flex flex-1">{children}</SafeAreaView>;
  return <View>{children}</View>;
};
