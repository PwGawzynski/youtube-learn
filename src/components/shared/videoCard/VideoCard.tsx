import { TouchableOpacity, View } from 'react-native';

import { CardTitle } from './CardTitle';
import { Content } from './Content';
import { Footer } from './Footer';
import { Thumbnail } from './Thumbnail';
import type { VideoCardProps } from './types';
import { useVideoCard } from './useVideoCard';

export function VideoCard({
  item,
  style,
  showChannelTitle,
  onPress,
}: VideoCardProps) {
  const { publishedAtDate, title, channelTitle, handlePress } = useVideoCard({
    item,
    onPress,
  });

  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="flex-1 items-center justify-center gap-1" style={style}>
        <Thumbnail item={item} />
        {showChannelTitle && <CardTitle title={channelTitle} />}
        <Content content={title} />
        <Footer text={publishedAtDate} />
      </View>
    </TouchableOpacity>
  );
}
