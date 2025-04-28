import { View } from 'react-native';

import { VideoCard } from '@/components/shared/videoCard/VideoCard';
import { VideoList } from '@/components/shared/videoList/VideoList';

import { useCategorizedList } from '../hooks/useCategorizedList';
import type { CategorizedListProps } from '../types/components-types';
import { TopBar } from './TopBar';

const ITEM_WIDTH = 180;
const ITEM_HEIGHT = 160;
const PADDING_LEFT = 16;

export function CategorizedList({
  categoryName,
  maxResults = 5,
}: CategorizedListProps) {
  const { data } = useCategorizedList({ categoryName, maxResults });

  return (
    <View className="mt-4 h-[28%] justify-center">
      <TopBar
        headerText={categoryName}
        onShowMorePress={() => {
          console.log('show more');
        }}
      />
      <VideoList
        horizontal={{
          estimatedItemSize: ITEM_WIDTH,
          contentContainerStyle: { paddingLeft: PADDING_LEFT },
        }}
        data={data?.items}
        renderItem={({ item }) => (
          <VideoCard
            item={item}
            style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
          />
        )}
      />
    </View>
  );
}
