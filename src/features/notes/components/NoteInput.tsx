import { Text, TextInput, View } from 'react-native';

import { Button } from '@/components/ui/button';

import { useNoteInput } from '../hooks/useNoteInput';
import type { NoteInputProps } from '../types/components-types';

export function NoteInput({ notes$ }: NoteInputProps) {
  const { value, setValue, handleAdd } = useNoteInput({ notes$ });
  return (
    <View className="mb-2 p-2">
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Enter notes..."
        className="mb-3 rounded-lg border border-[#E5E5E5] bg-white p-3 text-sm"
        multiline
        onSubmitEditing={handleAdd}
        blurOnSubmit
        returnKeyType="done"
      />
      <Button onPress={handleAdd} className="mx-8 py-3">
        <Text className="text-base font-bold text-white">Add note</Text>
      </Button>
    </View>
  );
}
