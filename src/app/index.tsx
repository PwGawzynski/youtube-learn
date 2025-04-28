import { SafeAreaView } from 'react-native';

import { Login } from '@/features/login-splash';

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <Login />
    </SafeAreaView>
  );
}
