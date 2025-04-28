import { FlatList } from 'react-native';

import { useNotesList } from '../hooks/useNotesList';
import type { NotesListProps } from '../types/components-types';

export function NotesList({ notes$ }: NotesListProps) {
  const { notes, renderItem, keyExtractor } = useNotesList({ notes$ });

  return (
    <FlatList
      data={notes}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 8 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
