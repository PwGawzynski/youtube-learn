import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView, View } from 'react-native';

import { SearchBar } from '@/features/search-engine/components/SearchBar';

export default function Search() {
  const isFocused = useIsFocused();
  if (!isFocused) return null;

  return (
    <View className="flex-1">
      <SafeAreaView className="mt-12 flex-1">
        <View className="m-4">
          <SearchBar
            placeholder="Search videos"
            onChangeText={() => {}}
            value=""
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
