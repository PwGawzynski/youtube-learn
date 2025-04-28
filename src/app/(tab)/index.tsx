import { SafeAreaView, View } from 'react-native';

import { Feed } from '@/features/feed/components/Feed';
import { SearchAndSettingsHeader } from '@/features/search-and-settings-header/components/SearchAndSettingsHeader';

export default function Index() {
  return (
    <View className="flex-1">
      <SafeAreaView className="mt-12 flex-1">
        <SearchAndSettingsHeader />
        <Feed />
      </SafeAreaView>
    </View>
  );
}
