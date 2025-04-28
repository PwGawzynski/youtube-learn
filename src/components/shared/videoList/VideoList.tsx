import { FlatList } from 'react-native';

import { EmptyListComponent } from './EmptyListComponent';
import { ListLoading } from './ListLoading';
import type { VideoListProps } from './types';
import { useVideoList } from './useVideoList';

export function VideoList({
  horizontal,
  vertical,
  data,
  renderItem,
  isLoading,
  extraData,
}: VideoListProps) {
  const { ItemSeparatorComponent } = useVideoList({ vertical });

  if (isLoading) return <ListLoading />;

  return (
    <FlatList
      ListEmptyComponent={<EmptyListComponent />}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={ItemSeparatorComponent}
      data={data}
      renderItem={renderItem}
      extraData={extraData}
      keyExtractor={(item) =>
        item.id?.videoId || item.id?.channelId || item?.etag
      }
      horizontal={!!horizontal}
      keyboardDismissMode="on-drag"
      contentContainerStyle={
        horizontal?.contentContainerStyle || vertical?.contentContainerStyle
      }
    />
  );
}
