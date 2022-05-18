/* eslint-disable no-console */
import { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { useDebounce } from 'hooks';
import { getDiseaseNameApi } from 'services/disease';

import SearchForm from './SearchForm';
import RecommendList from './RecommendList';

import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedValue = useDebounce(searchValue, 300);

  const { data, isLoading } = useQuery(
    ['getDiseaseNameApi', debouncedValue],
    () =>
      getDiseaseNameApi({ searchText: debouncedValue }).then((res) => {
        console.count();
        return res.data.response.body.items.item;
      }),
    {
      enabled: !!debouncedValue.trim(),
      staleTime: 2 * 60 * 1000,
    }
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <main className={styles.searchPage}>
      <h1 className={styles.title}>질환명을 검색해보세요</h1>
      <section className={styles.searchSection}>
        <SearchForm onSubmit={handleSubmit} onChange={handleChange} />
        <RecommendList recommend={data} searchValue={searchValue} isLoading={isLoading} />
      </section>
    </main>
  );
};

export default SearchPage;
