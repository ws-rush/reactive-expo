import { Text, View } from 'react-native';
import { tw } from '~/utils/tw';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View className={styles.bgColor} style={{ direction: 'rtl' }}>
      <View className={styles.getStartedContainer + styles.bgColor}>
        <Text className={styles.getStartedText + styles.textColor}>{title}</Text>
        <View
          className={styles.codeHighlightContainer + styles.homeScreenFilename + styles.bgColor}>
          <Text className={styles.bgColor}>{path}</Text>
        </View>
        <Text className="ltr:text-green-500 rtl:text-red-500 ltr:text-right rtl:text-left">{description}</Text>
        <Text className={tw`ltr:text-green-500 rtl:text-red-500 ltr:text-right rtl:text-left font-exo`}>{`solved ${description}`}</Text>
      </View>
    </View>
  );
};

const styles = {
  codeHighlightContainer: `rounded-md px-1`,
  getStartedContainer: `items-center mx-12`,
  getStartedText: `text-lg leading-6 text-center`,
  helpContainer: `items-center mx-5 mt-4`,
  helpLink: `py-4`,
  helpLinkText: `text-center`,
  homeScreenFilename: `my-2`,
  textColor: 'text-black dark:text-white',
  bgColor: 'bg-white dark:bg-black',
  direction: 'text-green-500',
};
