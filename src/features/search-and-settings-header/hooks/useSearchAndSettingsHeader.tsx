import { useRouter } from 'expo-router';

export function useSearchAndSettingsHeader() {
  const router = useRouter();

  const handleSearchPress = () => {
    router.push('/(tab)/search');
  };

  const handleSettingsPress = () => {
    router.push('/settings');
  };

  return { handleSearchPress, handleSettingsPress };
}
