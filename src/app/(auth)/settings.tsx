import { Image } from 'expo-image';
import { SafeAreaView, View } from 'react-native';

import { ProfileSticker } from '@/components/shared/profileSticker/ProfileSticker';
import { Text } from '@/components/ui/text';
import NotifiationSetter from '@/features/notifications/components/NotifiationSetter';

const BELL_ICON = require('@/assets/icons/notification-icon.svg');

const ICON_SIZE = 42;
const MARGIN_OFFSET = -8;

export default function Settings() {
  return (
    <SafeAreaView className="mt-12 flex-1 gap-4">
      <View className="h-48 items-center justify-center">
        <ProfileSticker chanelName="John Doe" />
      </View>

      <View className="gap-4 border-t-2 border-button px-8 py-4">
        <View className="flex-row items-center gap-2 ">
          <Image
            source={BELL_ICON}
            style={{
              width: ICON_SIZE,
              height: ICON_SIZE,
              marginLeft: MARGIN_OFFSET,
            }}
            contentFit="contain"
          />
          <Text className="text-xl">Learning reminders</Text>
        </View>
        <NotifiationSetter />
      </View>
    </SafeAreaView>
  );
}
