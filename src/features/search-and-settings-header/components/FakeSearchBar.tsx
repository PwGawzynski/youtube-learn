import { SearchIcon } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '@/components/ui/text';
import { useIsDark } from '@/core/hooks/useIsDark';

import type { FakeSearchBarProps } from '../types/components-types';

export function FakeSearchBar({ onPress }: FakeSearchBarProps) {
  const isDark = useIsDark();

  return (
    <TouchableOpacity
      className="h-12 flex-1 flex-row items-center rounded-xl border-2 border-gray-300 bg-transparent px-3 dark:border-gray-300"
      onPress={onPress}
    >
      <View className="justify-center">
        <SearchIcon color={isDark ? '#fff' : '#000'} className="size-4" />
      </View>
      <Text className="native:text-lg native:leading-tight pl-3 text-base text-foreground placeholder:text-muted-foreground lg:text-sm ">
        Search videos
      </Text>
    </TouchableOpacity>
  );
}
