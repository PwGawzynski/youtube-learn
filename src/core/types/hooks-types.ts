import type { SearchParams } from '../api/services/search';

export type UseYtSearchQueryProps = {
  queryString: string;
  maxResults?: number;
  order?: SearchParams['order'];
};
