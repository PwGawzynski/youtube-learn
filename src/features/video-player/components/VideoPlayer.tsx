import { View } from 'react-native';
import Video from 'react-native-video';

import { useVideoPlayer } from '../hooks/useVideoPlayer';
import {
  selectedTextTrack,
  source,
  subtitleStyle,
  videoStyle,
} from '../utils/setup';
import { ControlPanel } from './ControlPanel';
import { PlaybackTimeInfo } from './PlaybackTimeInfo';
import { ProgressBar } from './ProgressBar';

export function VideoPlayer() {
  const {
    videoRef,
    isPlaying,
    isMuted,
    isFullscreen,
    handleSeek,
    handleOnLoad,
    handleOnProgress,
    handleOnPictureInPictureStatusChanged,
    handleOnFullscreenPlayerDidDismiss,
  } = useVideoPlayer();
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View className="size-full flex-1 items-center justify-center">
        <Video
          source={source}
          onLoad={handleOnLoad}
          selectedTextTrack={selectedTextTrack}
          onPictureInPictureStatusChanged={
            handleOnPictureInPictureStatusChanged
          }
          subtitleStyle={subtitleStyle}
          onFullscreenPlayerDidDismiss={handleOnFullscreenPlayerDidDismiss}
          fullscreen={isFullscreen}
          muted={isMuted}
          paused={!isPlaying}
          ref={videoRef}
          onProgress={handleOnProgress}
          style={videoStyle}
        />
        <ControlPanel />
      </View>
      <PlaybackTimeInfo />
      <ProgressBar handleSeek={handleSeek} />
    </View>
  );
}
