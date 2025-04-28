import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView, View } from 'react-native';

import { Search } from '@/features/search';

export default function SearchScreen() {
  const isFocused = useIsFocused();
  if (!isFocused) return null;

  return (
    <View className="flex-1">
      <SafeAreaView className="mt-12 flex-1">
        <Search />
      </SafeAreaView>
    </View>
  );
}
