import { Text } from '@/components/ui/text';

import type { HeaderProps } from './types';

export function Header({ children }: HeaderProps) {
  return <Text className="text-2xl font-bold">{children}</Text>;
}
