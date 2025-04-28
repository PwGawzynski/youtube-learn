import { Image } from 'expo-image';
import { View } from 'react-native';

import { APP_ICON_SIZE } from '../utils/setup';

const AppIco = require('@/assets/icons/app-icon.svg');

export function AppIcon() {
  return (
    <View className="my-8 flex-1 items-center justify-center ">
      <View className="size-28 items-center justify-center rounded-2xl bg-[#8B91A3]">
        <Image
          source={AppIco}
          contentFit="contain"
          style={{ width: APP_ICON_SIZE, height: APP_ICON_SIZE }}
        />
      </View>
    </View>
  );
}
