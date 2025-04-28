import { use$, useObserve } from '@legendapp/state/react';

import { notesStore$ } from '@/core/state';

import type { UseNotesProps } from '../types/hooks-types';

export function useNotes({ videoId }: UseNotesProps) {
  const notes$ = use$(
    () =>
      notesStore$.videoNotes.find((video) => video.videoId.get() === videoId)
        ?.notes,
  );

  useObserve(() => {
    if (!notes$) {
      notesStore$.videoNotes.set((prev) => [...prev, { videoId, notes: [] }]);
    }
  });

  return notes$;
}
