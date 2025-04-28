import { TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { Text } from '@/components/ui/text';

import useTimePicker from '../hooks/useTimePicker';
import { notificationStore$ } from '../store/store';
import type { TimePickerProps } from '../types/components-types';

export default function TimePicker({ handleConfirm }: TimePickerProps) {
  const {
    isDatePickerVisible,
    displayedTime,
    handlePress,
    time,
    setIsDatePickerVisible,
  } = useTimePicker();
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text className="text-center text-lg">{displayedTime}</Text>
      <DatePicker
        modal
        mode="time"
        open={isDatePickerVisible}
        date={time}
        onConfirm={(date) => {
          notificationStore$.notificationTime.set(date);
          handleConfirm(true);
          setIsDatePickerVisible(false);
        }}
      />
    </TouchableOpacity>
  );
}
