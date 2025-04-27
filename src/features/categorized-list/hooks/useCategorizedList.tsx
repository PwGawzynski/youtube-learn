import { useYtSearchQuery } from '@/core/hooks/useYtSearchQuery';

import type { UseCategorizedListProps } from '../types/hooks-types';

export function useCategorizedList({
  categoryName,
  maxResults = 5,
}: UseCategorizedListProps) {
  const query = useYtSearchQuery({ queryString: categoryName, maxResults });

  return { ...query };
}
