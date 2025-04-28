import { View } from 'react-native';

import { useSearch } from '../hooks/useSearch';
import { SortOptions } from '../types/components-types';
import { ResultsCountInfo } from './ResultsCountInfo';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { SortModal } from './SortModal';
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
      <SortModal
        visible={modalVisible}
        onClose={handleCloseModal}
        selectedSort={sort}
        onSortSelect={handleSortSelect}
      />
    </View>
  );
}
