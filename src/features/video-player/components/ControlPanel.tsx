import { TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { useControllPanel } from '../hooks/useControllPanel';
import { FADE_DURATION } from '../utils/setup';
import { BottomControlls } from './BottomControlls';
import { ControllVideoPlayBack } from './ControllVideoPlayBack';
import { TopControlls } from './TopControlls';

export function ControlPanel() {
  const { isControlPanelAwaked, handlePressAwake, isPlaying } =
    useControllPanel();

  if (!isControlPanelAwaked) {
    return (
      <TouchableOpacity
        className="absolute inset-0 z-10 flex-row items-center justify-center gap-2 "
        onPress={handlePressAwake}
      />
    );
  }

  return (
    <Animated.View
      entering={FadeIn.duration(FADE_DURATION)}
      exiting={FadeOut.duration(FADE_DURATION)}
      className="absolute inset-0 z-10"
      key={`${isPlaying}-${isControlPanelAwaked}`}
    >
      <View className="absolute inset-0 z-10 flex-col items-center justify-center gap-2 bg-black/80 p-4">
        <TopControlls />

        <ControllVideoPlayBack />

        <BottomControlls />
      </View>
    </Animated.View>
  );
}
