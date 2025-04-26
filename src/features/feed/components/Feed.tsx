import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native';

import { CategorizedList } from '@/features/categorized-list';

const categories = ['React Native', 'React', 'TypeScript', 'JavaScript'];
const MAX_RESULTS = 3;

export function Feed() {
  const bottomTabHeight = useBottomTabBarHeight();
  const paddingBottom = bottomTabHeight * 3;

  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{
        paddingBottom,
      }}
    >
      {categories.map((category) => (
        <CategorizedList
          key={category}
          categoryName={category}
          maxResults={MAX_RESULTS}
        />
      ))}
    </ScrollView>
  );
}
