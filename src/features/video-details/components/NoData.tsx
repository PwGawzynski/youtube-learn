import { View } from 'react-native';

import { Text } from '@/components/ui/text';

export function NoData() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>No data available</Text>
    </View>
  );
}
