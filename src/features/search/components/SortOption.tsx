import { Pressable, View } from 'react-native';

import { Text } from '@/components/ui/text';

import type { SortOptionProps } from '../types/components-types';

export function SortOption({ label, selected, onSelect }: SortOptionProps) {
  return (
    <Pressable className="flex-row items-center" onPress={onSelect}>
      <View
        className={`size-6 items-center justify-center rounded-full border-2 border-white ${
          selected ? 'bg-white' : 'bg-transparent'
        }`}
      >
        {selected && <View className="size-2 rounded-full bg-slate-500" />}
      </View>
      <Text className="ml-3 text-lg text-white">{label}</Text>
    </Pressable>
  );
}
