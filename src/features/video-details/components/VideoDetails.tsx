import { ScrollView, View } from 'react-native';

import type { VideoDetailsProps } from '../types/components-types';
import { NoData } from './NoData';
import { VideoDescription } from './VideoDescription';
import { VideoStatistics } from './VideoStatistics';

export function VideoDetails({ video }: VideoDetailsProps) {
  if (!video || !video.snippet) {
    return <NoData />;
  }

  return (
    <ScrollView className="mt-4 flex-1">
      <View className="pb-4">
        <VideoDescription description={video.snippet.description} />
        {video.statistics && (
          <VideoStatistics
            viewCount={video.statistics.viewCount}
            likeCount={video.statistics.likeCount}
          />
        )}
      </View>
    </ScrollView>
  );
}
