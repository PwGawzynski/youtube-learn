import { View } from 'react-native';

import { AppIcon } from './AppIcon';
import { BottomContent } from './BottomContent';
import { LogoBox } from './LogoBox';

export function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-[#A3A9B8] px-6 pb-12 pt-24">
      {/* Logo */}
      <LogoBox />
      {/* App icon */}
      <AppIcon />
      {/* Bottom content */}
      <BottomContent />
    </View>
  );
}
