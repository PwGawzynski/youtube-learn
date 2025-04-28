import { View } from 'react-native';

import { useBottomControlls } from '../hooks/useBottomControlls';
import { ControllButton } from './ControllButton';

export function BottomControlls() {
  const { handlePressFullscreen } = useBottomControlls();
  return (
    <View className="w-full flex-row items-center justify-end gap-2">
      <ControllButton
        // eslint-disable-next-line global-require
        icon={require('../assets/fullscreen-icon.svg')}
        onPress={handlePressFullscreen}
      />
    </View>
  );
}
