import { View } from 'react-native';

import { AppModal } from '@/components/shared/modal';

import { useSearch } from '../hooks/useSearch';
import { SortOptions } from '../types/components-types';
import { ResultsCountInfo } from './ResultsCountInfo';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { SortOptionButton } from './SortOptionButton';

export function Search() {
  const {
    query,
    data,
    isLoading,
    totalResults,
    sort,
    modalVisible,
    handleCloseModal,
    handleSortSelect,
    handleOpenModal,
    handleTextChange,
    sortOptions,
  } = useSearch({
    query: '',
    sort: SortOptions.VIEW_COUNT_DESC,
  });
  return (
    <View className="m-4 flex-1">
      <SearchBar placeholder="Search videos" onChangeText={handleTextChange} />
      {totalResults && (
        <ResultsCountInfo totalResults={totalResults} query={query} />
      )}
      <SortOptionButton sort={sort} handleOpenModal={handleOpenModal} />
      <SearchResults data={data?.items} isLoading={isLoading} />
      <AppModal
        visible={modalVisible}
        onClose={handleCloseModal}
        options={sortOptions}
        onOptionSelect={handleSortSelect}
      />
    </View>
  );
}
