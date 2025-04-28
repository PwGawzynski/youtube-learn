/* eslint-disable global-require */

import { View } from 'react-native';

import { useControllVideoPlayBack } from '../hooks/useControllVideoPlayBack';
import { ControllButton } from './ControllButton';

export function ControllVideoPlayBack() {
  const {
    handlePressPlay,
    handlePressPause,
    isPlaying,
    handlePressForward,
    handlePressBackward,
  } = useControllVideoPlayBack();
  return (
    <View className="h-16 flex-1 flex-row items-center justify-center gap-12 ">
      <View className="size-16 items-center justify-center ">
        <ControllButton
          icon={require('../assets/backward-icon.svg')}
          onPress={handlePressBackward}
        />
      </View>

      <View className="size-16 items-center justify-center ">
        {!isPlaying ? (
          <ControllButton
            icon={require('../assets/play-icon.svg')}
            onPress={handlePressPlay}
          />
        ) : (
          <ControllButton
            icon={require('../assets/pause-icon.svg')}
            onPress={handlePressPause}
          />
        )}
      </View>

      <View className="size-16 items-center justify-center">
        <ControllButton
          icon={require('../assets/forward-icon.svg')}
          onPress={handlePressForward}
        />
      </View>
    </View>
  );
}
