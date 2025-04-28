import '../core/settings/global.css';

import { ThemeProvider } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { useIsomorphicLayoutEffect } from '@/core/hooks/useIsomorphicLayoutEffect';
import { QUERY_DEFAULTS } from '@/core/settings/query';
import { DARK_THEME, LIGHT_THEME } from '@/core/settings/theme';
import { validateEnv } from '@/core/utils/validateEnv';
import { useColorScheme } from '@/lib/useColorScheme';

export { ErrorBoundary } from 'expo-router';

// Validate the environment variables
validateEnv();

export default function Layout() {
  const hasMounted = React.useRef(false);
  const { isDarkColorScheme } = useColorScheme();
  const [isWebAdjusted, setIsWebAdjusted] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    if (Platform.OS === 'web') {
      document.documentElement.classList.add('bg-background');
    }

    setIsWebAdjusted(true);
    hasMounted.current = true;
  }, []);

  if (!isWebAdjusted) {
    return null;
  }
  return (
    <>
      <GestureHandlerRootView>
        <QueryClientProvider client={QUERY_DEFAULTS.queryClient}>
          <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
            <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="index"
                options={{ animation: 'fade', gestureEnabled: false }}
              />
            </Stack>
          </ThemeProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
      <Toast />
    </>
  );
}
