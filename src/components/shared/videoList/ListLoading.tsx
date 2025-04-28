import { ActivityIndicator, View } from 'react-native';

import { useIsDark } from '@/core/hooks/useIsDark';

export function ListLoading() {
  const isDark = useIsDark();

  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color={isDark ? 'white' : 'black'} />
    </View>
  );
}
