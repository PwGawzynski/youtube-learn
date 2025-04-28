import type { ListRenderItem } from 'react-native';

import type { Item } from '@/core/api/services/search';

export type VideoListProps = {
  horizontal?: {
    estimatedItemSize?: number;
  };
  vertical?: {
    estimatedItemSize?: number;
  };
  data: Item[];
  renderItem: ListRenderItem<Item>;
  isLoading?: boolean;
};

export type ListSeparatorProps = {
  vertical?: boolean;
};
