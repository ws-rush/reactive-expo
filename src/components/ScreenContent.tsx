import { EditScreenInfo } from './EditScreenInfo';
import { Text, View } from 'react-native';

type ScreenContentProps = {
  title: string | React.ReactNode;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};
const styles = {
  container: `flex justify-center items-center bg-white dark:bg-black`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200 dark:bg-gray-600`,
  title: `text-xl font-bold text-black dark:text-white`,
};
