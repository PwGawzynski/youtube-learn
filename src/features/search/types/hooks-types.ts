import type { SearchParams } from '@/core/api/services/search';

import type { SearchBarProps, SortOptions } from './components-types';

export type UseSearchResultsProps = {
  query: string;
  sort: SearchParams['order'];
};

export type UseSearchBarProps = Pick<SearchBarProps, 'onChangeText'>;

export type UseSearchProps = {
  query: string;
  sort?: SortOptions;
  maxResults?: number;
};

export type UseSortModalProps = {
  selectedSort: SortOptions;
  onClose: () => void;
};
