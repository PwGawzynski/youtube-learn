import { View } from 'react-native';

import { Text } from '@/components/ui/text';

import type { ResultsCountInfoProps } from '../types/components-types';

export function ResultsCountInfo({
  totalResults,
  query,
}: ResultsCountInfoProps) {
  return (
    <View className="my-2">
      <Text>
        {totalResults} results found for{' '}
        <Text className="font-bold">{`"${query}"`}</Text>
      </Text>
    </View>
  );
}
