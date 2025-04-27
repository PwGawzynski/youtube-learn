import type { Item } from '@/core/api/services/search/search-response.types';

import { SortOptions } from '../types/components-types';

export function getSortedItems(items: Item[], sortType?: SortOptions) {
  if (!items) return items;

  const itemsCopy = [...items];

  if (sortType === SortOptions.DATE_ASC) {
    return itemsCopy.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt);
      const dateB = new Date(b.snippet.publishedAt);
      return dateA.getTime() - dateB.getTime();
    });
  }

  if (sortType === SortOptions.DATE_DESC) {
    return itemsCopy.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt);
      const dateB = new Date(b.snippet.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });
  }

  if (sortType === SortOptions.VIEW_COUNT_DESC) {
    return itemsCopy;
  }

  return itemsCopy;
}
