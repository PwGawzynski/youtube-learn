import type { ImageSourcePropType } from 'react-native';

export type ControllButtonProps = {
  onPress: () => void;
  icon: ImageSourcePropType;
  className?: string;
};

export type ControlPanelProps = {};

export type ProgressBarProps = {
  handleSeek: (seconds: number) => void;
};
