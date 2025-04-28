import { currentTime } from '@legendapp/state/helpers/time';
import { use$ } from '@legendapp/state/react';
import { useState } from 'react';

import { notificationStore$ } from '../store/store';

export default function useTimePicker() {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const time = use$(() => {
    if (notificationStore$.notificationId.get()) {
      return notificationStore$.notificationTime.get();
    }
    return currentTime.get();
  });

  const displayedTime = time.toLocaleTimeString().slice(0, 5);

  const handlePress = () => {
    setIsDatePickerVisible(true);
  };

  return {
    isDatePickerVisible,
    displayedTime,
    handlePress,
    time,
    setIsDatePickerVisible,
  };
}
