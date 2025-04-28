import { View } from 'react-native';
import Video from 'react-native-video';

import { AppModal } from '@/components/shared/modal';

import { useVideoPlayer } from '../hooks/useVideoPlayer';
import type { VideoPlayerProps } from '../types/component-types';
import { source, subtitleStyle, videoStyle } from '../utils/setup';
import { ControlPanel } from './ControlPanel';
import { PlaybackTimeInfo } from './PlaybackTimeInfo';
import { ProgressBar } from './ProgressBar';

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  const {
    videoRef,
    isPlaying,
    isMuted,
    isFullscreen,
    handleOnLoad,
    handleOnProgress,
    handleOnPictureInPictureStatusChanged,
    handleOnFullscreenPlayerDidDismiss,
    isSubtitleModalVisible,
    subtitleWithNone,
    selectedSubtitle,
    handleOnSubtitleSelect,
    handleOnSubtitleClose,
  } = useVideoPlayer();

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View className="size-full flex-1 items-center justify-center">
        <Video
          source={source}
          onLoad={handleOnLoad}
          selectedTextTrack={selectedSubtitle}
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
      <ProgressBar videoId={videoId} />
      <AppModal
        visible={isSubtitleModalVisible}
        onClose={handleOnSubtitleClose}
        options={subtitleWithNone}
        onOptionSelect={handleOnSubtitleSelect}
      />
    </View>
  );
}
