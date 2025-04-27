import { useQuery } from '@tanstack/react-query';

import type { SearchParams } from '../api/services/search';
import { search } from '../api/services/search';

const DEFAULT_MAX_RESULTS = 1;
const DEFAULT_ORDER = 'relevance';

export function useYtSearchQuery({
  queryString,
  maxResults = DEFAULT_MAX_RESULTS,
  order = DEFAULT_ORDER,
}: {
  queryString: string;
  maxResults?: number;
  order?: SearchParams['order'];
}) {
  return useQuery({
    queryKey: ['search', queryString, maxResults, order],
    queryFn: () =>
      search({ q: queryString, part: 'snippet', maxResults, order }),
    staleTime: Infinity,
  });
}
