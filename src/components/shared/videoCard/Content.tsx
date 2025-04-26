import { View } from 'react-native';

import { Text } from '@/components/ui/text';

import type { ContentProps } from './types';

export function Content({ content }: ContentProps) {
  return (
    <View className="w-full flex-[2]">
      <Text
        className="text-left text-sm "
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {content}
      </Text>
    </View>
  );
}
