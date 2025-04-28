import { useYtSearchQuery } from '@/core/hooks/useYtSearchQuery';

import type { UseSearchResultsProps } from '../types/hooks-types';

export function useSearchResults({
  query: queryString,
  sort: sortOption,
}: UseSearchResultsProps) {
  const query = useYtSearchQuery({ queryString, order: sortOption });
  return {
    ...query,
  };
}
