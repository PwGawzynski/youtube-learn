import { Pressable, View } from 'react-native';

import { useProgressBar } from '../hooks/useProgressBar';
import type { ProgressBarProps } from '../types/component-types';

export function ProgressBar({ videoId }: ProgressBarProps) {
  const {
    progressPercentage,
    playableProgressPercentage,
    dotPosition,
    progressBarRef,
    panResponder,
    handleOnLayout,
    relativeNoteTimes,
  } = useProgressBar({ videoId });

  return (
    <View
      className="h-2 w-full items-start justify-center bg-black"
      ref={progressBarRef}
      onLayout={handleOnLayout}
      {...panResponder.panHandlers}
    >
      <View
        className="h-2 w-full bg-gray-500"
        style={{ width: playableProgressPercentage, zIndex: 1 }}
      />
      <View
        className="h-2 w-full bg-red-500"
        style={{
          width: progressPercentage,
          zIndex: 2,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <Pressable
        className="absolute left-0 top-0 size-[12px] rounded-full bg-red-500"
        style={{
          left: dotPosition,
          transform: [{ translateX: -5 }, { translateY: -2.5 }],
          zIndex: 4,
        }}
      />
      {relativeNoteTimes.map(({ position, id }) => {
        return (
          <View
            key={id}
            className="absolute left-0 top-0 h-2 w-1  bg-blue-500"
            style={{
              left: position,
              zIndex: 3,
            }}
          />
        );
      })}
    </View>
  );
}
