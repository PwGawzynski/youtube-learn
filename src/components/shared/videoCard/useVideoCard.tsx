import type { VideoCardProps } from './types';

export function useVideoCard({ item, onPress }: Omit<VideoCardProps, 'style'>) {
  const { publishedAt, title, channelTitle } = item.snippet;
  const publishedAtDate = new Date(publishedAt).toLocaleDateString();

  const handlePress = () => {
    onPress?.(item);
  };

  return { publishedAtDate, title, channelTitle, handlePress };
}
