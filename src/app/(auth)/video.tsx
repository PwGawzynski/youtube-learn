import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { Header } from '@/components/shared/header';
import { ProfileSticker } from '@/components/shared/profileSticker/ProfileSticker';
import { SegmentedControl } from '@/components/shared/segmentedControl';
import { getVideos } from '@/core/api/services/videos/videos';
import { QUERY_DEFAULTS } from '@/core/settings/query';
import type { VideoScreenLocalParams } from '@/core/types';
import { Notes } from '@/features/notes';
import { VideoDetails } from '@/features/video-details';
import { VideoPlayer } from '@/features/video-player';

export default function Video() {
  const { videoId } = useLocalSearchParams<VideoScreenLocalParams>();

  const [activeIndex, setActiveIndex] = useState(0);
  const { data } = useQuery({
    queryKey: ['video', 'statistics, snippet', videoId],
    queryFn: () => getVideos({ id: videoId, part: 'statistics, snippet' }),
    enabled: !!videoId,
    staleTime: QUERY_DEFAULTS.staleTime,
  });

  const title = data?.items[0].snippet.title;
  const chanelName = data?.items[0].snippet.channelTitle;
  return (
    <SafeAreaView className="my-12 flex-1">
      <View className="h-1/3 w-full">
        <VideoPlayer videoId={videoId} />
      </View>
      <View className="w-full px-4 py-2">
        <Header className="text-2xl font-bold">{title}</Header>
      </View>
      <View className="h-2/3 w-full px-4">
        <ProfileSticker chanelName={chanelName} />
        <SegmentedControl
          segments={['Details', 'Notes']}
          defaultActiveIndex={0}
          onChange={setActiveIndex}
        />
        {activeIndex === 0 && <VideoDetails video={data?.items[0]} />}
        {activeIndex === 1 && <Notes videoId={videoId} />}
      </View>
    </SafeAreaView>
  );
}
