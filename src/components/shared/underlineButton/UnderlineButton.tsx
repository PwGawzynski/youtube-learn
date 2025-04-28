import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

import type { UnderlineButtonProps } from './types';
import { useUnderLineButton } from './useUnderLineButton';

export function UnderlineButton({ text, onPress }: UnderlineButtonProps) {
  const { isPressed, handlePressIn, handlePressOut } = useUnderLineButton();

  return (
    <Text
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      className={cn('underline', isPressed && 'opacity-50')}
    >
      {text}
    </Text>
  );
}
