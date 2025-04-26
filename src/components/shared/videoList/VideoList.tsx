import { FlatList, View } from 'react-native';

import { ListLoading } from './ListLoading';
import type { VideoListProps } from './types';
import { useVideoList } from './useVideoList';

export function VideoList({
  horizontal,
  vertical,
  data,
  renderItem,
  isLoading,
}: VideoListProps) {
  const { ItemSeparatorComponent } = useVideoList({ vertical });

  if (isLoading) return <ListLoading />;

  return (
    <FlatList
      ListEmptyComponent={
        <View className="flex-1 items-center justify-center" />
      }
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={ItemSeparatorComponent}
      data={data}
      renderItem={renderItem}
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
