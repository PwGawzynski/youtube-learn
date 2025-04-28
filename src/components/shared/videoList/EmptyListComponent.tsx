import { View } from 'react-native';

import { Text } from '@/components/ui/text';

export function EmptyListComponent() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>No results found</Text>
    </View>
  );
}
