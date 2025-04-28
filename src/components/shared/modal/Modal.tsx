import { Modal, Pressable, View } from 'react-native';

import { Text } from '@/components/ui/text';

import { OptionComponent } from './OptionComponent';
import type { ModalProps } from './types';
import { useSelectionModal } from './useSelectionModal';

export function AppModal<T>({
  visible,
  onClose,
  options,
  onOptionSelect,
  initialSelectedIndex,
  title = 'Select an option:',
}: ModalProps<T>) {
  const { handleConfirm, isSelected, handleOptionSelect } =
    useSelectionModal<T>({
      onClose,
      options,
      onOptionSelect,
      initialSelectedIndex,
      visible,
    });

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Pressable
        className="flex-1 items-center justify-center bg-gray-900/95"
        onPress={onClose}
      >
        <Pressable
          className="w-4/5 rounded-3xl bg-slate-500/90 p-6"
          onPress={(e) => e.stopPropagation()}
        >
          <Text className="mb-6 text-2xl font-medium text-white">{title}</Text>

          <View className="space-y-5">
            {options.map((option) => (
              <OptionComponent
                key={JSON.stringify(option.value)}
                label={option.label}
                value={option.value}
                selected={isSelected(option.value)}
                onSelect={() => handleOptionSelect(option.value)}
              />
            ))}
          </View>

          <Pressable
            className="mt-8 rounded-lg bg-gray-800 py-3"
            onPress={handleConfirm}
          >
            <Text className="text-center text-lg text-white">Confirm</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
