import { Image } from 'expo-image';
import { View } from 'react-native';

import { LOGO_HEIGHT, LOGO_WIDTH } from '../utils/setup';

const Logo = require('@/assets/icons/logo.svg');

export function LogoBox() {
  return (
    <View className=" items-center">
      <Image
        source={Logo}
        contentFit="contain"
        style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
      />
    </View>
  );
}
