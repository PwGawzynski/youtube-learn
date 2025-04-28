import { KeyboardAvoidingView, Platform } from 'react-native';

import { useNotes } from '../hooks/useNotes';
import type { NotesProps } from '../types/components-types';
import { NoteInput } from './NoteInput';
import { NotesList } from './NotesList';

export function Notes({ videoId }: NotesProps) {
  const notes$ = useNotes({ videoId });

  return (
    <KeyboardAvoidingView
      className="flex-1 pb-2"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <NotesList notes$={notes$} />
      <NoteInput notes$={notes$} />
    </KeyboardAvoidingView>
  );
}
