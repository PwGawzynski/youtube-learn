import { use$ } from '@legendapp/state/react';

import { videoPlayerStore$ } from '@/core/state';

export function useControllVideoPlayBack() {
  const isPlaying = use$(videoPlayerStore$.isPlaying);
  const setIsPlaying = use$(videoPlayerStore$.setIsPlaying);
  const setIsControlPanelAwaked = use$(videoPlayerStore$.setControlPanelAwaked);

  const handlePressPlay = () => {
    setIsPlaying(true);
    setIsControlPanelAwaked(false);
  };

  const handlePressPause = () => {
    setIsPlaying(false);
    setIsControlPanelAwaked(false);
  };
  return {
    handlePressPlay,
    handlePressPause,
    isPlaying,
  };
}
