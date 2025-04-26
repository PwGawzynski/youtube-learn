import { View } from 'react-native';

import type { ListSeparatorProps } from './types';

export function ListSeparator({ vertical }: ListSeparatorProps) {
  return <View className={`${vertical ? 'h-4' : 'w-4'}`} />;
}
