import { use$, useObserve } from '@legendapp/state/react';
import { useRef } from 'react';
import type {
  OnLoadData,
  OnPictureInPictureStatusChangedData,
  OnProgressData,
  VideoRef,
} from 'react-native-video';

import { videoPlayerStore$ } from '@/core/state';

export function useVideoPlayer() {
  const videoRef = useRef<VideoRef>(null);
  const isPlaying = use$(videoPlayerStore$.isPlaying);
  const setIsPlaying = use$(videoPlayerStore$.setIsPlaying);
  const isMuted = use$(videoPlayerStore$.isMuted);
  const isFullscreen = use$(videoPlayerStore$.isFullscreen);
  const setIsFullscreen = use$(videoPlayerStore$.setIsFullscreen);
  const setIsPip = use$(videoPlayerStore$.setIsPip);
  const setProgresInfo = use$(videoPlayerStore$.setProgresInfo);

  const handleSeek = (seconds: number) => {
    videoRef.current?.seek(seconds, 10);
  };

  const handleOnLoad = (e: OnLoadData) => {
    setIsPlaying(true);
    setProgresInfo({
      currentTime: e.currentTime,
      playableDuration: 0,
      seekableDuration: 0,
    });
  };

  const handleOnProgress = (e: OnProgressData) => {
    setProgresInfo({
      currentTime: e.currentTime,
      playableDuration: e.playableDuration,
      seekableDuration: e.seekableDuration,
    });
  };

  const handleOnFullscreenPlayerDidDismiss = () => {
    setIsFullscreen(false);
  };

  const handleOnPictureInPictureStatusChanged = (
    e: OnPictureInPictureStatusChangedData,
  ) => {
    if (!e.isActive) {
      setIsPip(false);
    }
  };

  useObserve(() => {
    const isPip = videoPlayerStore$.isPip.get();
    if (isPip) {
      videoRef.current?.enterPictureInPicture();
    } else {
      videoRef.current?.exitPictureInPicture();
    }
  });

  return {
    videoRef,
    isPlaying,
    setIsPlaying,
    isMuted,
    isFullscreen,
    setIsFullscreen,
    setIsPip,
    handleSeek,
    handleOnLoad,
    handleOnProgress,
    handleOnFullscreenPlayerDidDismiss,
    handleOnPictureInPictureStatusChanged,
  };
}
