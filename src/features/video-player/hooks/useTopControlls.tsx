import { use$ } from '@legendapp/state/react';

import { videoPlayerStore$ } from '@/core/state';

export function useTopControlls() {
  const isMuted = use$(videoPlayerStore$.isMuted);
  const setIsMuted = use$(videoPlayerStore$.setIsMuted);
  const setIsControlPanelAwaked = use$(videoPlayerStore$.setControlPanelAwaked);
  const isPip = use$(videoPlayerStore$.isPip);
  const setIsPip = use$(videoPlayerStore$.setIsPip);

  const handlePressMute = () => {
    setIsMuted(!isMuted);
    setIsControlPanelAwaked(false);
  };

  const handlePressPip = () => {
    setIsPip(!isPip);
    setIsControlPanelAwaked(false);
  };

  return {
    handlePressMute,
    handlePressPip,
  };
}
