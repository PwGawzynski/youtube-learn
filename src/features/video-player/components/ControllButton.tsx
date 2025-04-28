import { Image } from 'expo-image';
import { TouchableOpacity } from 'react-native';

import { cn } from '@/lib/utils';

import type { ControllButtonProps } from '../types/component-types';

export function ControllButton({
  onPress,
  icon,
  className,
}: ControllButtonProps) {
  return (
    <TouchableOpacity
      className={cn(
        'size-10 items-center justify-center rounded-full bg-gray-200',
        className,
      )}
      onPress={onPress}
    >
      <Image source={icon} style={{ width: '80%', height: '80%' }} />
    </TouchableOpacity>
  );
}
