import { useQuery } from '@tanstack/react-query';

import { search } from '@/core/api/services/search';

import type { UseCategorizedListProps } from '../types/hooks-types';

export function useCategorizedList({
  categoryName,
  maxResults = 5,
}: UseCategorizedListProps) {
  const query = useQuery({
    queryKey: ['search', categoryName, maxResults],
    queryFn: () => search({ q: categoryName, part: 'snippet', maxResults }),
    staleTime: Infinity,
  });

  return { ...query };
}
