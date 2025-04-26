import { Tabs } from 'expo-router';

import { useIsDark } from '@/core/hooks/useIsDark';
import { NAV_THEME } from '@/lib/constants';

export default function Auth() {
  const isDark = useIsDark();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark
            ? NAV_THEME.dark.background
            : NAV_THEME.light.background,
        },
        tabBarStyle: {
          backgroundColor: isDark
            ? NAV_THEME.dark.background
            : NAV_THEME.light.background,
        },
        animation: 'none',
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
        name="search"
      />
    </Tabs>
  );
}
