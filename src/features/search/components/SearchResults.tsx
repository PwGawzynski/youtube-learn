import { VideoCard } from '@/components/shared/videoCard/VideoCard';
import { VideoList } from '@/components/shared/videoList/VideoList';

import type { SearchResultsProps } from '../types/components-types';

const ITEM_WIDTH = 350;
const ITEM_HEIGHT = 300;
const PADDING_TOP = 16;
export function SearchResults({ data, isLoading }: SearchResultsProps) {
  return (
    <VideoList
      isLoading={isLoading}
      vertical={{
        estimatedItemSize: ITEM_WIDTH,
        contentContainerStyle: { paddingTop: PADDING_TOP },
      }}
      data={data}
      renderItem={({ item }) => (
        <VideoCard
          showChannelTitle
          item={item}
          style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
        />
      )}
    />
  );
}
