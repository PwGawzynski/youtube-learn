import { QueryClient } from '@tanstack/react-query';

const QUERY_DEFAULTS = {
  queryClient: new QueryClient(),
  staleTime: 1000 * 60 * 10,
};

export { QUERY_DEFAULTS };
