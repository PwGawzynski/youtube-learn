import { View } from 'react-native';

import { Header } from '@/components/shared/Header/Header';
import { UnderlineButton } from '@/components/shared/underlineButton';

import type { TopBarProps } from '../types/components-types';

export function TopBar({ headerText, onShowMorePress }: TopBarProps) {
  return (
    <View className="flex-row items-center justify-between px-4 pb-4">
      <Header>{headerText}</Header>
      <UnderlineButton text="Show more" onPress={onShowMorePress} />
    </View>
  );
}
