import { observable } from '@legendapp/state';

import type { VideoPlayerStore } from './store.types';

export const videoPlayerStore$ = observable<VideoPlayerStore>({
  isPlaying: false,
  setIsPlaying: (isPlaying: boolean) => {
    videoPlayerStore$.isPlaying.set(isPlaying);
  },
  isMuted: false,
  setIsMuted: (isMuted: boolean) => {
    videoPlayerStore$.isMuted.set(isMuted);
  },
  isFullscreen: false,
  setIsFullscreen: (isFullscreen: boolean) => {
    videoPlayerStore$.isFullscreen.set(isFullscreen);
  },
  controlPanelAwaked: false,
  setControlPanelAwaked: (controlPanelAwaked: boolean) => {
    videoPlayerStore$.controlPanelAwaked.set(controlPanelAwaked);
  },
  isPip: false,
  setIsPip: (isPip: boolean) => {
    videoPlayerStore$.isPip.set(isPip);
  },
  progresInfo: {
    currentTime: 0,
    playableDuration: 0,
    seekableDuration: 0,
  },
  setProgresInfo: (progresInfo: VideoPlayerStore['progresInfo']) => {
    videoPlayerStore$.progresInfo.set(progresInfo);
  },
});
