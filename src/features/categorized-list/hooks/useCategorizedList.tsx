import { useRouter } from 'expo-router';

import type { Item } from '@/core/api/services/search';
import { useYtSearchQuery } from '@/core/hooks/useYtSearchQuery';
import type { VideoScreenLocalParams } from '@/core/types';

import type { UseCategorizedListProps } from '../types/hooks-types';

export function useCategorizedList({
  categoryName,
  maxResults = 5,
}: UseCategorizedListProps) {
  const router = useRouter();
  const query = useYtSearchQuery({ queryString: categoryName, maxResults });

  const handleVideoPress = (item: Item) => {
    const params: VideoScreenLocalParams = {
      videoId: item.id.videoId,
    };

    router.push({
      pathname: '/(auth)/video',
      params,
    });
  };
  return { ...query, handleVideoPress };
}
