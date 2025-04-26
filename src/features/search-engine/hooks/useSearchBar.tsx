import { useIsDark } from '@/core/hooks/useIsDark';

export function useSearchBar() {
  const isDark = useIsDark();

  return {
    isDark,
  };
}
