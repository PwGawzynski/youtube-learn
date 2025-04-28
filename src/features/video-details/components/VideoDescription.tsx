import { View } from 'react-native';

import { Text } from '@/components/ui/text';

type VideoDescriptionProps = {
  description: string;
};

export function VideoDescription({ description }: VideoDescriptionProps) {
  return (
    <View className="flex-1">
      <Text className="mb-2 text-lg font-semibold">Description</Text>
      <Text className="text-base ">{description}</Text>
    </View>
  );
}
