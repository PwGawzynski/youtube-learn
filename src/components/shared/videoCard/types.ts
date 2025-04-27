import type { StyleProp, ViewStyle } from 'react-native';

import type { Item } from '@/core/api/services/search';

export type VideoCardProps = {
  item: Item;
  style: StyleProp<ViewStyle>;
  showChannelTitle?: boolean;
  onPress?: (item: Item) => void;
};

export type ThumbnailProps = {
  item: Item;
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
