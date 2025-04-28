import { Pressable, View } from 'react-native';

import { Text } from '@/components/ui/text';

import type { SegmentedControlProps } from './types';
import { useSegmentedControl } from './useSegmentedControl';

export const SegmentedControl = ({
  segments,
  defaultActiveIndex = 0,
  onChange,
  className = '',
}: SegmentedControlProps) => {
  const { activeIndex, handleSegmentClick } = useSegmentedControl({
    defaultActiveIndex,
    onChange,
  });

  return (
    <View className={`w-full flex-row border-b border-gray-200 ${className}`}>
      {segments.map((segment, index) => (
        <Pressable
          key={segment}
          className={`flex-1 py-2 ${
            activeIndex === index ? 'border-b-2 border-gray-800' : ''
          }`}
          onPress={() => handleSegmentClick(index)}
        >
          <Text
            className={`text-center text-sm font-medium ${
              activeIndex === index ? 'text-gray-800' : 'text-gray-500'
            }`}
          >
            {segment}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};
