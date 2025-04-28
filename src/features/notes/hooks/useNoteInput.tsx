import { use$ } from '@legendapp/state/react';
import { useState } from 'react';
import { Keyboard } from 'react-native';

import { videoPlayerStore$ } from '@/core/state';

import type { UseNoteInputProps } from '../types/hooks-types';

export function useNoteInput({ notes$ }: UseNoteInputProps) {
  const [value, setValue] = useState('');
  const videoTime = use$(videoPlayerStore$.progresInfo.currentTime);

  const handleAdd = () => {
    if (value.trim()) {
      notes$.push({
        id: Date.now().toString(),
        content: value.trim(),
        time: videoTime,
      });
      setValue('');
      Keyboard.dismiss();
    }
  };

  return {
    value,
    setValue,
    handleAdd,
  };
}
