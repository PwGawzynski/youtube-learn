import { View } from 'react-native';

import { Text } from '@/components/ui/text';

import type { CardTitleProps } from './types';

export function CardTitle({ title }: CardTitleProps) {
  return (
    <View className="w-full flex-[1]">
      <Text
        className="text-left text-sm font-bold"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    </View>
  );
}
