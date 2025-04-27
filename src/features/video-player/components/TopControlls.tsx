import { View } from 'react-native';

import { useTopControlls } from '../hooks/useTopControlls';
import { ControllButton } from './ControllButton';

export function TopControlls() {
  const { handlePressMute, handlePressPip } = useTopControlls();
  return (
    <View className="w-full flex-row items-center justify-end gap-2">
      <ControllButton
        // eslint-disable-next-line global-require
        icon={require('../assets/volume-icon.svg')}
        onPress={handlePressMute}
      />

      {/* pip-button */}
      <ControllButton
        // eslint-disable-next-line global-require
        icon={require('../assets/airplay-icon.svg')}
        onPress={handlePressPip}
      />
    </View>
  );
}
