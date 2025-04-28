import { useRouter } from 'expo-router';

import type { VideoInfoItem } from '@/core/api/services/search';
import { useYtSearchQuery } from '@/core/hooks/useYtSearchQuery';
import type { VideoScreenLocalParams } from '@/core/types';

import type { UseCategorizedListProps } from '../types/hooks-types';

const DEFAULT_MAX_RESULTS = 5;

export function useCategorizedList({
  categoryName,
  maxResults = DEFAULT_MAX_RESULTS,
}: UseCategorizedListProps) {
  const router = useRouter();
  const query = useYtSearchQuery({ queryString: categoryName, maxResults });

  const handleVideoPress = (item: VideoInfoItem) => {
    const params: VideoScreenLocalParams = {
      videoId: item.id.videoId,
    };

    router.push({
      pathname: '/(auth)/video',
      params,
    });
  };

  const handleMorePress = () => {
    router.push({
      pathname: '/(auth)/search',
      params: { query: categoryName },
    });
  };
  return { ...query, handleVideoPress, handleMorePress };
}
