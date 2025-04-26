import { useColorScheme } from 'react-native';

export function useIsDark() {
  const isDark = useColorScheme() === 'dark';
  return isDark;
}
