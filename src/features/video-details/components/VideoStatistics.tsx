import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import { Text } from '@/components/ui/text';
import { useIsDark } from '@/core/hooks/useIsDark';

import { formatNumber } from '../utils/formatViewCount';

type VideoStatisticsProps = {
  viewCount: string;
  likeCount: string;
};

export function VideoStatistics({
  viewCount,
  likeCount,
}: VideoStatisticsProps) {
  const isDark = useIsDark();
  return (
    <View className="flex-row justify-between pt-4">
      <View className="flex-row items-center rounded-lg bg-button px-4 py-2">
        <Ionicons
          name="eye-outline"
          size={24}
          color={isDark ? '#333' : '#fff'}
        />
        <Text className="ml-2 text-base text-button-foreground">
          {formatNumber(viewCount)} views
        </Text>
      </View>
      <View className="flex-row items-center rounded-lg bg-button px-4 py-2">
        <Ionicons
          name="thumbs-up-outline"
          size={24}
          color={isDark ? '#333' : '#fff'}
        />
        <Text className="ml-2 text-base text-button-foreground">
          {formatNumber(likeCount)} likes
        </Text>
      </View>
    </View>
  );
}
