import { use$, useObserve } from '@legendapp/state/react';
import { useEffect, useRef } from 'react';
import type {
  OnLoadData,
  OnPictureInPictureStatusChangedData,
  OnProgressData,
  SelectedTrack,
  VideoRef,
} from 'react-native-video';
import { SelectedTrackType } from 'react-native-video';

import type { Option } from '@/components/shared/modal';
import { videoPlayerStore$ } from '@/core/state';

import { selectedTextTrack, textTracks } from '../utils/setup';

export function useVideoPlayer() {
  const videoRef = useRef<VideoRef>(null);
  const seekRef = useRef<((time: number, tolerance?: number) => void) | null>(
    null,
  );
  const isPlaying = use$(videoPlayerStore$.isPlaying);
  const setIsPlaying = use$(videoPlayerStore$.setIsPlaying);
  const isMuted = use$(videoPlayerStore$.isMuted);
  const isFullscreen = use$(videoPlayerStore$.isFullscreen);
  const isSubtitleModalVisible = use$(videoPlayerStore$.isSubtitleModalVisible);
  const selectedSubtitle = use$(videoPlayerStore$.selectedTextTrack);

  const subtitleOptions: Option<SelectedTrack>[] = textTracks.map((track) => ({
    label: track.title,
    value: {
      type: SelectedTrackType.LANGUAGE,
      value: track.language,
    },
  }));

  const subtitleWithNone: Option<SelectedTrack>[] = [
    ...subtitleOptions,
    {
      label: 'None',
      value: null,
    },
  ];

  const handleOnSubtitleSelect = (subtitle: Option<SelectedTrack>) => {
    videoPlayerStore$.selectedTextTrack.set(subtitle.value);
    videoPlayerStore$.isSubtitleModalVisible.set(false);
  };

  const handleOnSubtitleClose = () => {
    videoPlayerStore$.isSubtitleModalVisible.set(false);
  };

  const handleOnLoad = (e: OnLoadData) => {
    setIsPlaying(true);
    videoPlayerStore$.progresInfo.set({
      currentTime: e.currentTime,
      playableDuration: 0,
      seekableDuration: 0,
    });
    videoPlayerStore$.selectedTextTrack.set(selectedTextTrack);
  };

  useEffect(() => {
    if (videoRef.current) {
      seekRef.current = videoRef.current.seek;
      videoPlayerStore$.seek.set(seekRef);
    }
  }, [videoRef.current?.seek]);

  const handleOnProgress = (e: OnProgressData) => {
    videoPlayerStore$.progresInfo.set({
      currentTime: e.currentTime,
      playableDuration: e.playableDuration,
      seekableDuration: e.seekableDuration,
    });
  };

  const handleOnFullscreenPlayerDidDismiss = () => {
    videoPlayerStore$.isFullscreen.set(false);
  };

  const handleOnPictureInPictureStatusChanged = (
    e: OnPictureInPictureStatusChangedData,
  ) => {
    if (!e.isActive) {
      videoPlayerStore$.isPip.set(false);
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
    handleOnLoad,
    handleOnProgress,
    handleOnFullscreenPlayerDidDismiss,
    handleOnPictureInPictureStatusChanged,
    isSubtitleModalVisible,
    subtitleOptions,
    subtitleWithNone,
    selectedSubtitle,
    handleOnSubtitleSelect,
    handleOnSubtitleClose,
  };
}
