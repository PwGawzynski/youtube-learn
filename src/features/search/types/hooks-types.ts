import type { SearchBarProps, SortOptions } from './components-types';

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
