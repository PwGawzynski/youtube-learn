import { observable } from '@legendapp/state';
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';
import { syncObservable } from '@legendapp/state/sync';

import type { NotesStore$ } from './store.types';

export const notesStore$ = observable<NotesStore$>({
  videoNotes: [],
});

syncObservable(notesStore$, {
  persist: {
    name: 'notesStore',
    plugin: ObservablePersistMMKV,
  },
});
