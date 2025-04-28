import { use$ } from '@legendapp/state/react';
import { useEffect, useRef } from 'react';

import { videoPlayerStore$ } from '@/core/state';

import { SLEEP_TIME } from '../utils/setup';

export function useControllPanel() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isPlaying = use$(videoPlayerStore$.isPlaying);
  const isControlPanelAwaked = use$(videoPlayerStore$.controlPanelAwaked);

  const handlePressAwake = () => {
    videoPlayerStore$.controlPanelAwaked.set(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      videoPlayerStore$.controlPanelAwaked.set(false);
    }, SLEEP_TIME);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      videoPlayerStore$.controlPanelAwaked.set(false);
    };
  }, []);

  return {
    isControlPanelAwaked,
    handlePressAwake,
    isPlaying,
  };
}
