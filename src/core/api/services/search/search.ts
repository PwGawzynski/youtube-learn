import { YtDataApi } from '../../yt-data/yt-data-api';
import type { SearchParams } from './search-request.types';

export const search = async (params: SearchParams) => {
  return YtDataApi.get('/search', { params });
};
