import { Image } from 'expo-image';
import { View } from 'react-native';

import { blurhash } from '@/core/settings/image';

import type { ThumbnailProps } from './types';

export function Thumbnail({ item }: ThumbnailProps) {
  return (
    <View className="w-full flex-[5] items-center justify-center">
      <Image
        style={{ width: '100%', height: '100%', borderRadius: 10 }}
        source={{ uri: item.snippet.thumbnails.medium.url }}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={300}
      />
    </View>
  );
}
