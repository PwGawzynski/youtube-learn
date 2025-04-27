import { TouchableOpacity, View } from 'react-native';

import { Text } from '@/components/ui/text';

import type { SortOptionButtonProps } from '../types/components-types';
import { SortOptions } from '../types/components-types';

export function SortOptionButton({
  sort,
  handleOpenModal,
}: SortOptionButtonProps) {
  let option;

  switch (sort) {
    case SortOptions.DATE_ASC:
      option = 'Updated Date Oldest';
      break;
    case SortOptions.DATE_DESC:
      option = 'Updated Date Newest';
      break;
    case SortOptions.VIEW_COUNT_DESC:
      option = 'Most Popular';
      break;
    default:
      option = 'Relevance';
  }

  return (
    <View className="items-end">
      <View className="my-2 flex-row items-center gap-2">
        <Text>Sort by:</Text>
        <TouchableOpacity onPress={handleOpenModal}>
          <Text className="font-bold">{option}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
