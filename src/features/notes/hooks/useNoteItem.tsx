import { use$ } from '@legendapp/state/react';

import { videoPlayerStore$ } from '@/core/state';
import { formatTime } from '@/core/utils/format-time';

import type { UseNoteItemProps } from '../types/hooks-types';

export function useNoteItem({ note }: UseNoteItemProps) {
  const time = formatTime(note.time);
  const seek = use$(videoPlayerStore$.seek);
  const handlePress = () => {
    seek?.current?.(note.time);
  };

  return {
    time,
    handlePress,
  };
}
