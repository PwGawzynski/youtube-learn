import { observable } from '@legendapp/state';

import type { VideoPlayerStore } from './store.types';

export const videoPlayerStore$ = observable<VideoPlayerStore>({
  isPlaying: false,
  setIsPlaying: (isPlaying: boolean) => {
    videoPlayerStore$.isPlaying.set(isPlaying);
  },
  isMuted: false,
  isFullscreen: false,
  controlPanelAwaked: false,
  isPip: false,
  progresInfo: {
    currentTime: 0,
    playableDuration: 0,
    seekableDuration: 0,
  },
  seek: null,
  selectedTextTrack: null,
  isSubtitleModalVisible: false,
});
