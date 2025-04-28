import type { SelectedTrack } from 'react-native-video';

export type VideoPlayerStore = {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  isMuted: boolean;
  isFullscreen: boolean;
  controlPanelAwaked: boolean;
  isPip: boolean;
  progresInfo: {
    currentTime: number;
    playableDuration: number;
    seekableDuration: number;
  };
  selectedTextTrack: SelectedTrack | null;
  isSubtitleModalVisible: boolean;
  seek: React.RefObject<(time: number, tolerance?: number) => void> | null;
};
