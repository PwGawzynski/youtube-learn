import { useState } from 'react';

import type { SearchParams } from '@/core/api/services/search';
import { useYtSearchQuery } from '@/core/hooks/useYtSearchQuery';

import { SortOptions } from '../types/components-types';
import type { UseSearchProps } from '../types/hooks-types';
import { getSortedItems } from '../utils/getSortedItems';

export function useSearch({
  query: queryString,
  sort: sortOption,
  maxResults,
}: UseSearchProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [query, setQuery] = useState(queryString);
  const [sort, setSort] = useState<UseSearchProps['sort'] | undefined>(
    sortOption,
  );

  let order: SearchParams['order'];

  switch (sort) {
    case SortOptions.DATE_ASC:
      order = 'date';
      break;
    case SortOptions.DATE_DESC:
      order = 'date';
      break;
    case SortOptions.VIEW_COUNT_DESC:
      order = 'viewCount';
      break;
    default:
      order = undefined;
  }

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSortSelect = (selectedSort: SortOptions) => {
    setSort(selectedSort);
  };
  const handleTextChange = (text: string) => {
    setQuery(text);
  };
  const { data, isLoading } = useYtSearchQuery({
    queryString: query,
    order,
    maxResults,
  });

  const totalResults =
    query && data?.pageInfo ? data.pageInfo.totalResults : undefined;

  const sortedData = {
    ...data,
    items: getSortedItems(data?.items, sort),
  };
  return {
    query,
    sort,
    data: sortedData,
    isLoading,
    totalResults,
    modalVisible,
    handleOpenModal,
    handleCloseModal,
    handleSortSelect,
    handleTextChange,
  };
}
