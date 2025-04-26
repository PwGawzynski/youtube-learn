import { View } from 'react-native';

import { Feed } from '@/features/feed/components/Feed';

export default function Index() {
  return (
    <View className="flex-1">
      <Feed />
    </View>
  );
}
