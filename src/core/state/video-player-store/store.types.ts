export type VideoPlayerStore = {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
  isFullscreen: boolean;
  setIsFullscreen: (isFullscreen: boolean) => void;
  controlPanelAwaked: boolean;
  setControlPanelAwaked: (controlPanelAwaked: boolean) => void;
  isPip: boolean;
  setIsPip: (isPip: boolean) => void;
  progresInfo: {
    currentTime: number;
    playableDuration: number;
    seekableDuration: number;
  };
  setProgresInfo: (progresInfo: {
    currentTime: number;
    playableDuration: number;
    seekableDuration: number;
  }) => void;
};
