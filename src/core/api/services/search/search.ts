import Toast from 'react-native-toast-message';

import { YtDataApi } from '../../yt-data-api/yt-data-api';
import type { SearchParams } from './search-request.types';

export const search = async (params: SearchParams) => {
  try {
    const response = await YtDataApi.get('/search', { params });
    return response;
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Failed to fetch search results',
    });
    throw error;
  }
};
