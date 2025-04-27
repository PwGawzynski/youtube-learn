import { Modal, Pressable, View } from 'react-native';

import { Text } from '@/components/ui/text';

import { useSortModal } from '../hooks/useSortModal';
import type { SortModalProps } from '../types/components-types';
import { SortOptions } from '../types/components-types';
import { SortOption } from './SortOption';

export function SortModal({
  visible,
  onClose,
  selectedSort,
  onSortSelect,
}: SortModalProps) {
  const { handleConfirm, isSelected } = useSortModal({
    selectedSort,
    onClose,
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
          <Text className="mb-6 text-2xl font-medium text-white">
            Sort records by:
          </Text>

          <View className="space-y-5">
            <SortOption
              label="Upload date: latest"
              selected={isSelected(SortOptions.DATE_DESC)}
              onSelect={() => onSortSelect(SortOptions.DATE_DESC)}
            />
            <SortOption
              label="Upload date: oldest"
              selected={isSelected(SortOptions.DATE_ASC)}
              onSelect={() => onSortSelect(SortOptions.DATE_ASC)}
            />
            <SortOption
              label="Most popular"
              selected={isSelected(SortOptions.VIEW_COUNT_DESC)}
              onSelect={() => onSortSelect(SortOptions.VIEW_COUNT_DESC)}
            />
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
