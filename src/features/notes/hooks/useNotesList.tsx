import { use$ } from '@legendapp/state/react';

import type { Note } from '@/core/state/notes-store/store.types';

import { NoteItem } from '../components/NoteItem';
import type { UseNotesListProps } from '../types/hooks-types';

export function useNotesList({ notes$ }: UseNotesListProps) {
  const notes = use$(notes$);
  const renderItem = ({ item }: { item: Note }) => <NoteItem note={item} />;
  const keyExtractor = (item: Note) => item.id;

  return {
    notes,
    renderItem,
    keyExtractor,
  };
}
