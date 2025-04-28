import { useRouter } from 'expo-router';

import type { VideoInfoItem } from '@/core/api/services/search';

export function useSearchResults() {
  const router = useRouter();

  const onPress = (item: VideoInfoItem) => {
    router.push({
      pathname: '/(auth)/video',
      params: { videoId: item.id.videoId },
    });
  };

  return { onPress };
}
