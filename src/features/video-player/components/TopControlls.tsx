import { View } from 'react-native';

import { useTopControlls } from '../hooks/useTopControlls';
import { ControllButton } from './ControllButton';

export function TopControlls() {
  const { handlePressMute, handlePressPip, handlePressSubtitle } =
    useTopControlls();
  return (
    <View className="w-full flex-row items-center justify-between gap-2">
      <View className="flex-row items-center gap-2 ">
        <ControllButton
          // eslint-disable-next-line global-require
          icon={require('../assets/languages.svg')}
          onPress={handlePressSubtitle}
        />
      </View>
      <View className="flex-row items-center gap-2 ">
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
    </View>
  );
}
