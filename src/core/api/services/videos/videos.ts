import Toast from 'react-native-toast-message';

import { YtDataApi } from '../../yt-data-api/yt-data-api';
import type { YouTubeVideosQueryParams } from './videos-request.types';
import type { YoutubeVideoListResponse } from './videos-response.types';

export const getVideos = async (params: YouTubeVideosQueryParams) => {
  try {
    const response = await YtDataApi.get<YoutubeVideoListResponse>('/videos', {
      params,
    });
    return response;
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Failed to fetch video details',
    });
    throw error;
  }
};
