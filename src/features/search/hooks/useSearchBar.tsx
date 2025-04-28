import { useLocalSearchParams } from 'expo-router';

import { useDebouncedHandler } from '@/core/hooks/useDebouncedTextHandler';
import { useIsDark } from '@/core/hooks/useIsDark';
import type { SearchBarLocalParams } from '@/core/types/local-search-params-types';

import type { UseSearchBarProps } from '../types/hooks-types';

const DEBOUNCE_TIME = 1000;

export function useSearchBar({ onChangeText }: UseSearchBarProps) {
  const { query } = useLocalSearchParams<SearchBarLocalParams>();

  const isDark = useIsDark();
  const debouncedOnChangeText = useDebouncedHandler({
    callback: onChangeText,
    delay: DEBOUNCE_TIME,
    initialText: query,
  });

  return {
    isDark,
    debouncedOnChangeText,
    query,
  };
}
