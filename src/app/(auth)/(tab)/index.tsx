import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { CategorizedList } from '@/features/categorized-list';
import { SearchAndSettingsHeader } from '@/features/search-and-settings-header';

const categories = ['React Native', 'React', 'TypeScript', 'JavaScript'];
const MAX_RESULTS = 1;

export default function Index() {
  const bottomTabHeight = useBottomTabBarHeight();
  const paddingBottom = bottomTabHeight * 3;
  return (
    <View className="flex-1">
      <SafeAreaView className="mt-12 flex-1">
        <SearchAndSettingsHeader />
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingBottom,
          }}
        >
          {categories.map((category, index) => (
            <CategorizedList
              key={category}
              categoryName={category}
              maxResults={MAX_RESULTS}
              showSeparator={index !== categories.length - 1}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
