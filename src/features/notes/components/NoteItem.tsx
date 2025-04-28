import { Text, TouchableOpacity } from 'react-native';

import { useNoteItem } from '../hooks/useNoteItem';
import type { NoteItemProps } from '../types/components-types';

export function NoteItem({ note }: NoteItemProps) {
  const { time, handlePress } = useNoteItem({ note });

  return (
    <TouchableOpacity
      className="mb-[10px] rounded-[10px] border border-[#E5E5E5] bg-white p-[10px] shadow-sm"
      onPress={handlePress}
      key={note.id}
    >
      <Text className="text-[13px] leading-[16px] text-[#393A4A]">
        {note.content}
      </Text>
      <Text className="mt-1 text-right text-[12px] text-[#393A4A] opacity-60">
        {time}
      </Text>
    </TouchableOpacity>
  );
}
