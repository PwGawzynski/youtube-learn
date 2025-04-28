import type { VideoInfoItem } from '@/core/api/services/search';

export type SearchBarProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  autoFocus?: boolean;
};

export type SearchResultsProps = {
  data: VideoInfoItem[];
  isLoading: boolean;
  sort: SortOptions;
};

export type ResultsCountInfoProps = {
  totalResults: number;
  query: string;
};

export type SortOptionButtonProps = {
  sort: SortOptions;
  handleOpenModal: () => void;
};

export type SortModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedSort: SortOptions;
  onSortSelect: (sort: SortOptions) => void;
};

export type SortOptionProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

export enum SortOptions {
  DATE_ASC = 'Updated Date Oldest',
  DATE_DESC = 'Updated Date Newest',
  VIEW_COUNT_DESC = 'Most Popular',
}
