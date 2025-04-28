import { use$ } from '@legendapp/state/react';
import { useCallback, useMemo, useRef, useState } from 'react';
import {
  type DimensionValue,
  type GestureResponderEvent,
  type LayoutChangeEvent,
  PanResponder,
  type View,
} from 'react-native';

import { videoPlayerStore$ } from '@/core/state';

export function useProgressBar() {
  const currentTime = use$(videoPlayerStore$.progresInfo.currentTime);
  const seekableDuration = use$(videoPlayerStore$.progresInfo.seekableDuration);
  const playableDuration = use$(videoPlayerStore$.progresInfo.playableDuration);
  const [isDragging, setIsDragging] = useState(false);
  const [temporaryProgress, setTemporaryProgress] = useState(0);
  const progressBarRef = useRef<View>(null);
  const progressBarWidth = useRef(0);
  const progressBarX = useRef(0);
  const seek = use$(videoPlayerStore$.seek);
  const progress = isDragging
    ? temporaryProgress
    : currentTime / seekableDuration;
  const playableProgress = currentTime / playableDuration;

  const progressPercentage: DimensionValue = `${progress * 100}%`;
  const playableProgressPercentage: DimensionValue = `${playableProgress * 100}%`;
  const dotPosition: DimensionValue = `${progress * 100}%`;

  const handleOnLayout = useCallback((event: LayoutChangeEvent) => {
    progressBarWidth.current = event.nativeEvent.layout.width;
    progressBarRef.current?.measureInWindow((x, _y, _width, _height) => {
      progressBarX.current = x;
    });
  }, []);

  const calculateProgress = useCallback((pageX: number) => {
    if (!progressBarWidth.current) return 0;

    const relativeX = pageX - progressBarX.current;

    return Math.max(0, Math.min(1, relativeX / progressBarWidth.current));
  }, []);

  const panResponder = useMemo(() => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event: GestureResponderEvent) => {
        setIsDragging(true);
        const newProgress = calculateProgress(event.nativeEvent.pageX);
        setTemporaryProgress(newProgress);
      },
      onPanResponderMove: (event: GestureResponderEvent) => {
        const newProgress = calculateProgress(event.nativeEvent.pageX);
        setTemporaryProgress(newProgress);
      },
      onPanResponderRelease: (event: GestureResponderEvent) => {
        const newProgress = calculateProgress(event.nativeEvent.pageX);

        // Update the actual video time
        const newTime = newProgress * seekableDuration;

        seek?.current?.(newTime);

        setIsDragging(false);
      },
      onPanResponderTerminate: () => {
        setIsDragging(false);
      },
    });
  }, [seekableDuration, calculateProgress, seek]);

  return {
    progressPercentage,
    playableProgressPercentage,
    dotPosition,
    progressBarRef,
    panResponder,
    handleOnLayout,
  };
}
