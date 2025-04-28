import type { ListRenderItem } from 'react-native';

import type { VideoInfoItem } from '@/core/api/services/search';

export type VideoListProps = {
  horizontal?: {
    estimatedItemSize?: number;
    contentContainerStyle?: object;
  };
  vertical?: {
    estimatedItemSize?: number;
    contentContainerStyle?: object;
  };
  data: VideoInfoItem[];
  renderItem: ListRenderItem<VideoInfoItem>;
  isLoading?: boolean;
  extraData?: any;
};

export type ListSeparatorProps = {
  vertical?: boolean;
};
