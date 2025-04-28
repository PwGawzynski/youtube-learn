import { View } from 'react-native';

import { Text } from '@/components/ui/text';

import type { FooterProps } from './types';

export function Footer({ text }: FooterProps) {
  return (
    <View className="w-full flex-[0.75]">
      <Text className="text-right text-[10px]">{text}</Text>
    </View>
  );
}
