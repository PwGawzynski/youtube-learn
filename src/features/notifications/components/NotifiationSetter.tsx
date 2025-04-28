import { Image } from 'expo-image';
import { View } from 'react-native';

import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';

import useNotificationSetter from '../hooks/useNotificationSetter';
import TimePicker from './TimePicker';

const ClockIcon = require('@/assets/icons/clock-icon.svg');

const ICON_SIZE = 24;

export function NotifiationSetter() {
  const { isNotificationEnabled, handleNotificationChange } =
    useNotificationSetter();
  return (
    <View className="h-14 w-full">
      <View className="w-full flex-row items-center justify-between ">
        <Text className="text-lg">Repeat everyday at:</Text>

        <View className="flex-row items-center gap-2">
          <Image
            source={ClockIcon}
            style={{ width: ICON_SIZE, height: ICON_SIZE }}
            contentFit="contain"
          />
          <TimePicker handleConfirm={handleNotificationChange} />
        </View>

        <Switch
          className="w-14"
          checked={isNotificationEnabled}
          onCheckedChange={handleNotificationChange}
        />
      </View>
    </View>
  );
}
