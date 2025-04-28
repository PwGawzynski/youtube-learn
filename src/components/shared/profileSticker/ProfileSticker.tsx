import { View } from 'react-native';

import { Header } from '@/components/shared/header';

import { Avatar } from './Avatar';
import type { ChanelProfileProps } from './types';

export function ProfileSticker({ chanelName }: ChanelProfileProps) {
  return (
    <View className="flex-row items-center justify-start py-2">
      <Avatar />
      <Header className="ml-2">{chanelName}</Header>
    </View>
  );
}
