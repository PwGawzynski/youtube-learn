import { videoPlayerStore$ } from '@/core/state';

export function useBottomControlls() {
  const handlePressFullscreen = () => {
    videoPlayerStore$.isFullscreen.set((f) => !f);
    videoPlayerStore$.controlPanelAwaked.set(false);
  };

  return {
    handlePressFullscreen,
  };
}
