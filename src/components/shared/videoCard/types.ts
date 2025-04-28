import type { StyleProp, ViewStyle } from 'react-native';

import type { VideoInfoItem } from '@/core/api/services/search';

export type VideoCardProps = {
  item: VideoInfoItem;
  style: StyleProp<ViewStyle>;
  showChannelTitle?: boolean;
  onPress?: (item: VideoInfoItem) => void;
};

export type ThumbnailProps = {
  item: VideoInfoItem;
};

export type ContentProps = {
  content: string;
};

export type CardTitleProps = {
  title: string;
};

export type FooterProps = {
  text: string;
};
