import type { VideoCardProps } from './types';

export function useVideoCard({ item }: Omit<VideoCardProps, 'style'>) {
  const { publishedAt, title, channelTitle } = item.snippet;
  const publishedAtDate = new Date(publishedAt).toLocaleDateString();

  return { publishedAtDate, title, channelTitle };
}
