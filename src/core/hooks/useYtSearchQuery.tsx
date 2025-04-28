import { useQuery } from '@tanstack/react-query';

import { search } from '../api/services/search';
import type { UseYtSearchQueryProps } from '../types/hooks-types';

const DEFAULT_MAX_RESULTS = 3;
const DEFAULT_ORDER = 'relevance';

export function useYtSearchQuery({
  queryString,
  maxResults = DEFAULT_MAX_RESULTS,
  order = DEFAULT_ORDER,
}: UseYtSearchQueryProps) {
  return useQuery({
    queryKey: ['search', queryString, maxResults, order],
    queryFn: () =>
      search({ q: queryString, part: 'snippet', maxResults, order }),
    staleTime: Infinity,
  });
}
