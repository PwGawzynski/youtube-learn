import { Tabs } from 'expo-router';

import { useIsDark } from '@/core/hooks/useIsDark';
import { useTabIcons } from '@/features/tab-icons/hooks/useTabIcons';
import { NAV_THEME } from '@/lib/constants';

export default function Auth() {
  const isDark = useIsDark();
  const { homeIcon, searchIcon } = useTabIcons();

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
            ? NAV_THEME.dark.tabBar
            : NAV_THEME.light.tabBar,
        },
        tabBarActiveTintColor: isDark
          ? NAV_THEME.dark.tabBarActive
          : NAV_THEME.light.tabBarActive,
        tabBarInactiveTintColor: isDark
          ? NAV_THEME.dark.tabBarInactive
          : NAV_THEME.light.tabBarInactive,
        animation: 'none',
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: homeIcon,
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: searchIcon,
        }}
        name="search"
      />
    </Tabs>
  );
}
