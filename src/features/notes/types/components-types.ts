import type { Observable } from '@legendapp/state';

import type { Note } from '@/core/state/notes-store/store.types';

export type NoteItemProps = {
  note: Note;
};

export type NotesListProps = {
  notes$: Observable<Note[]>;
};

export type NoteInputProps = {
  notes$: Observable<Note[]>;
};

export type NotesProps = {
  videoId: string;
};
