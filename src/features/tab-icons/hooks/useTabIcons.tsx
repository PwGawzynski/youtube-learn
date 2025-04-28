import { Image } from 'expo-image';
import { useCallback } from 'react';

const HOME_ICON = require('@/assets/icons/home-icon.svg');
const SEARCH_ICON = require('@/assets/icons/search-icon.svg');

export function useTabIcons() {
  const homeIcon = useCallback(
    ({ focused, size }: { focused: boolean; size: number }) => (
      <Image
        source={HOME_ICON}
        style={{ width: size, height: size }}
        contentFit="contain"
        tintColor={focused ? '#2B2D42' : '#fff'}
      />
    ),
    [],
  );
  const searchIcon = useCallback(
    ({ size, focused }: { focused: boolean; size: number }) => (
      <Image
        source={SEARCH_ICON}
        style={{ width: size, height: size }}
        contentFit="contain"
        tintColor={focused ? '#2B2D42' : '#fff'}
      />
    ),
    [],
  );

  return { homeIcon, searchIcon };
}
