import { Image } from 'expo-image';
import { View } from 'react-native';

export function Avatar() {
  return (
    <View className="size-14 items-center justify-center overflow-hidden rounded-full bg-button">
      <Image
        // eslint-disable-next-line global-require
        source={require('@/assets/icons/person-icon.svg')}
        className="size-full"
        contentFit="cover"
        style={{ width: 20, height: 20 }}
      />
    </View>
  );
}
