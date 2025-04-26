import { Tabs } from 'expo-router';

import { NAV_THEME } from '@/lib/constants';

export default function Auth() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: NAV_THEME.dark.background,
        },
        tabBarStyle: {
          backgroundColor: NAV_THEME.dark.background,
        },
      }}
    >
      <Tabs.Screen name="index" />
    </Tabs>
  );
}
