import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

import type { HeaderProps } from './types';

export function Header({ children, className }: HeaderProps) {
  return (
    <Text className={cn('text-2xl font-bold', className)}>{children}</Text>
  );
}
