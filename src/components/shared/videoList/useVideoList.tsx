import { useMemo } from 'react';

import { ListSeparator } from './ListSeparator';
import type { VideoListProps } from './types';

export function useVideoList({ vertical }: Pick<VideoListProps, 'vertical'>) {
  const ItemSeparatorComponent = useMemo(() => {
    return () => <ListSeparator vertical={!!vertical} />;
  }, [vertical]);

  return { ItemSeparatorComponent };
}
