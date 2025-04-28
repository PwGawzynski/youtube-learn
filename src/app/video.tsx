import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, View } from 'react-native';

import { ChanelProfile } from '@/components/shared/chanelProfile/ChanelProfile';
import { SegmentedControl } from '@/components/shared/segmentedControl';
import { getVideos } from '@/core/api/services/videos/videos';
import type { VideoScreenLocalParams } from '@/core/types';
import { VideoDetails } from '@/features/video-details';
import { VideoPlayer } from '@/features/video-player';

export default function Video() {
  const { videoId } = useLocalSearchParams<VideoScreenLocalParams>();

  const { data } = useQuery({
    queryKey: ['video', 'statistics, snippet', videoId],
    queryFn: () => getVideos({ id: videoId, part: 'statistics, snippet' }),
    enabled: !!videoId,
    staleTime: Infinity,
  });

  return (
    <SafeAreaView className="mt-12 flex-1">
      <View className="h-1/3 w-full">
        <VideoPlayer />
      </View>
      <View className="h-2/3 w-full px-4">
        <ChanelProfile chanelName={data?.items[0].snippet.channelTitle} />
        <SegmentedControl
          segments={['Details', 'Notes']}
          defaultActiveIndex={0}
          onChange={() => {}}
        />
        <VideoDetails video={data?.items[0]} />
      </View>
    </SafeAreaView>
  );
}
