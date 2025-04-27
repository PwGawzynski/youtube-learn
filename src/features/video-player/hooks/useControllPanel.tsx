import { use$ } from '@legendapp/state/react';
import { useEffect, useRef } from 'react';

import { videoPlayerStore$ } from '@/core/state';

const SLEEP_TIME = 3000;

export function useControllPanel() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isPlaying = use$(videoPlayerStore$.isPlaying);
  const isControlPanelAwaked = use$(videoPlayerStore$.controlPanelAwaked);
  const setIsControlPanelAwaked = use$(videoPlayerStore$.setControlPanelAwaked);

  const handlePressAwake = () => {
    setIsControlPanelAwaked(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsControlPanelAwaked(false);
    }, SLEEP_TIME);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsControlPanelAwaked(false);
    };
  }, [setIsControlPanelAwaked]);

  return {
    isControlPanelAwaked,
    handlePressAwake,
    isPlaying,
  };
}
