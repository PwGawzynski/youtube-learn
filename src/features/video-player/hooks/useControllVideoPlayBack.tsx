import { use$ } from '@legendapp/state/react';

import { videoPlayerStore$ } from '@/core/state';

import { BACKWARD_TIME, FORWARD_TIME } from '../utils/setup';

const TOLERANCE = 10;

export function useControllVideoPlayBack() {
  const isPlaying = use$(videoPlayerStore$.isPlaying);
  const setIsPlaying = use$(videoPlayerStore$.setIsPlaying);
  const currentTime = use$(videoPlayerStore$.progresInfo.currentTime);
  const seek = use$(videoPlayerStore$.seek);

  const handlePressPlay = () => {
    setIsPlaying(true);
    videoPlayerStore$.controlPanelAwaked.set(false);
  };

  const handlePressPause = () => {
    setIsPlaying(false);
    videoPlayerStore$.controlPanelAwaked.set(false);
  };

  const handlePressForward = () => {
    seek?.current?.(currentTime + FORWARD_TIME, TOLERANCE);
    videoPlayerStore$.controlPanelAwaked.set(false);
  };

  const handlePressBackward = () => {
    seek?.current?.(currentTime - BACKWARD_TIME, TOLERANCE);
    videoPlayerStore$.controlPanelAwaked.set(false);
  };

  return {
    handlePressPlay,
    handlePressPause,
    isPlaying,
    handlePressForward,
    handlePressBackward,
  };
}
