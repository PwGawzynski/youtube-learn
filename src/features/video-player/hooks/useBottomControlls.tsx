import { use$ } from '@legendapp/state/react';

import { videoPlayerStore$ } from '@/core/state';

export function useBottomControlls() {
  const isFullscreen = use$(videoPlayerStore$.isFullscreen);
  const setIsFullscreen = use$(videoPlayerStore$.setIsFullscreen);
  const setIsControlPanelAwaked = use$(videoPlayerStore$.setControlPanelAwaked);

  const handlePressFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setIsControlPanelAwaked(false);
  };

  return {
    handlePressFullscreen,
  };
}
