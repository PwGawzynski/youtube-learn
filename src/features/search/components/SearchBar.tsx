import { SearchIcon } from 'lucide-react-native';
import { View } from 'react-native';

import { Input } from '@/components/ui/input';

import { useSearchBar } from '../hooks/useSearchBar';
import type { SearchBarProps } from '../types/components-types';

export function SearchBar({ placeholder, onChangeText }: SearchBarProps) {
  const { isDark, debouncedOnChangeText, query } = useSearchBar({
    onChangeText,
  });

  return (
    <View className="h-12 flex-row items-center rounded-xl border-2 border-gray-300 bg-transparent px-3 dark:border-gray-300">
      <View className="justify-center">
        <SearchIcon color={isDark ? '#fff' : '#000'} className="size-4" />
      </View>
      <View className="w-full">
        <Input
          autoFocus={!query}
          className="border-0 bg-transparent"
          placeholder={query || placeholder}
          onChangeText={debouncedOnChangeText}
        />
      </View>
    </View>
  );
}
