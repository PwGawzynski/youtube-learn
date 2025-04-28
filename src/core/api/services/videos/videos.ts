import { YtDataApi } from '../../yt-data/yt-data-api';
import type { YouTubeVideosQueryParams } from './videos-request.types';
import type { YoutubeVideoListResponse } from './videos-response.types';

export const getVideos = async (params: YouTubeVideosQueryParams) => {
  return YtDataApi.get<YoutubeVideoListResponse>('/videos', {
    params,
  });
};
