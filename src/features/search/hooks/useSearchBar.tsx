import { useDebouncedHandler } from '@/core/hooks/useDebouncedTextHandler';
import { useIsDark } from '@/core/hooks/useIsDark';

import type { UseSearchBarProps } from '../types/hooks-types';

const DEBOUNCE_TIME = 1000;

export function useSearchBar({ onChangeText }: UseSearchBarProps) {
  const isDark = useIsDark();
  const debouncedOnChangeText = useDebouncedHandler({
    callback: onChangeText,
    delay: DEBOUNCE_TIME,
  });

  return {
    isDark,
    debouncedOnChangeText,
  };
}
