import { useQuery } from 'react-query';

import { useAppSelector, useDebounce } from 'hooks';
import { getDiseaseNameApi } from 'services/disease';
import { getSearchValue } from 'states/searchValue';

import SearchForm from './SearchForm';
import RecommendList from './RecommendList';

import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const searchValue = useAppSelector(getSearchValue);
  const debouncedValue = useDebounce(searchValue, 300);

  const { data, isLoading, isError } = useQuery(
    ['getDiseaseNameApi', debouncedValue],
    () =>
      getDiseaseNameApi({ searchText: debouncedValue }).then((res) => {
        const { item } = res.data.response.body.items;

        if (!item) return [];
        if (!Array.isArray(item)) return [item];

        return item;
      }),
    {
      enabled: !!debouncedValue.trim(),
      staleTime: 2 * 60 * 1000,
    }
  );

  return (
    <main className={styles.searchPage}>
      <h1 className={styles.title}>질환명을 검색해보세요</h1>
      <section className={styles.searchSection}>
        <SearchForm data={data ?? []} />
        <RecommendList data={data ?? []} isLoading={isLoading} isError={isError} debouncedValue={debouncedValue} />
      </section>
    </main>
  );
};

export default SearchPage;
