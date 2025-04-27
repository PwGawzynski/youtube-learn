import { use$ } from '@legendapp/state/react';

import { videoPlayerStore$ } from '@/core/state';

export function usePlaybackTimeInfo() {
  const currentTime = use$(videoPlayerStore$.progresInfo.currentTime);
  const duration = use$(videoPlayerStore$.progresInfo.seekableDuration);

  return {
    currentTime,
    duration,
  };
}
