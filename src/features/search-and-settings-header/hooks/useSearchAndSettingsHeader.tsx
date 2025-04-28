import { useRouter } from 'expo-router';

export function useSearchAndSettingsHeader() {
  const router = useRouter();

  const handleSearchPress = () => {
    router.push('/(auth)/(tab)/search');
  };

  const handleSettingsPress = () => {
    router.push('/(auth)/settings');
  };

  return { handleSearchPress, handleSettingsPress };
}
