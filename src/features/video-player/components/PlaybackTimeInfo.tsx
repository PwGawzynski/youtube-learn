import { View } from 'react-native';

import { Text } from '@/components/ui/text';

import { formatTime } from '../../../core/utils/format-time';
import { usePlaybackTimeInfo } from '../hooks/usePlaybackTimeInfo';

export function PlaybackTimeInfo() {
  const { currentTime, duration } = usePlaybackTimeInfo();
  return (
    <View className="w-full flex-row items-center gap-2 p-2">
      <Text className="text-white">{formatTime(currentTime)}</Text>
      <Text className="text-gray-500">/</Text>
      <Text className="text-white">{formatTime(duration)}</Text>
    </View>
  );
}
