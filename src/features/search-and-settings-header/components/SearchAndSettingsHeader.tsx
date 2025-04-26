import { Image } from 'expo-image';
import { TouchableOpacity, View } from 'react-native';

import { useSearchAndSettingsHeader } from '../hooks/useSearchAndSettingsHeader';
import { FakeSearchBar } from './FakeSearchBar';

const ICON_SIZE = 32;

export function SearchAndSettingsHeader() {
  const { handleSearchPress, handleSettingsPress } =
    useSearchAndSettingsHeader();

  return (
    <View className="m-4 flex-row items-center justify-between">
      <FakeSearchBar onPress={handleSearchPress} />
      <View className="items-center justify-center pl-3">
        <TouchableOpacity onPress={handleSettingsPress}>
          <Image
            style={{ width: ICON_SIZE, height: ICON_SIZE }}
            contentFit="contain"
            // eslint-disable-next-line global-require
            source={require('../assets/settings-icon.svg')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
