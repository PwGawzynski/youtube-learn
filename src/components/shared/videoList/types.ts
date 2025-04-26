import type { ListRenderItem } from 'react-native';

import type { Item } from '@/core/api/services/search';

export type VideoListProps = {
  horizontal?: {
    estimatedItemSize?: number;
    contentContainerStyle?: object;
  };
  vertical?: {
    estimatedItemSize?: number;
    contentContainerStyle?: object;
  };
  data: Item[];
  renderItem: ListRenderItem<Item>;
  isLoading?: boolean;
};

export type ListSeparatorProps = {
  vertical?: boolean;
};
