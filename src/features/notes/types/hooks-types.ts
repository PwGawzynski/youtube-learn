import type { Observable } from '@legendapp/state';

import type { Note } from '@/core/state/notes-store/store.types';

export type UseNotesProps = {
  videoId: string;
};

export type UseNotesListProps = {
  notes$: Observable<Note[]>;
};

export type UseNoteItemProps = {
  note: Note;
};

export type UseNoteInputProps = {
  notes$: Observable<Note[]>;
};
