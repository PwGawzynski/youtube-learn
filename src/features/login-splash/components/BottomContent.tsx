import { View } from 'react-native';

import { UnderlineButton } from '@/components/shared/underlineButton';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

import { useBottomContent } from '../hooks/useBottomContent';

export function BottomContent() {
  const { handleLogin, handlePrivacyPolicy, handleTerms } = useBottomContent();
  return (
    <View className="w-full flex-1 items-start justify-center">
      <Text className="mb-8 text-left text-[24px] font-semibold text-white">
        Welcome to the best{'\n'}YouTube-based learning{'\n'}application.
      </Text>
      {/* Login button */}
      <Button
        className="mb-4 w-full rounded-lg bg-[#23263A]"
        onPress={handleLogin}
      >
        <Text className="font-semibold text-white">Log in as guest</Text>
      </Button>
      {/* Terms and Privacy */}
      <View className="w-full flex-row items-center justify-center gap-2">
        <Text className="mt-2 text-center text-xs text-white">
          By continuing you agree with{'\n'}
          <UnderlineButton
            text="Terms and Conditions"
            onPress={handleTerms}
          />{' '}
          and{' '}
          <UnderlineButton
            text="Privacy Policy"
            onPress={handlePrivacyPolicy}
          />
        </Text>
      </View>
    </View>
  );
}
