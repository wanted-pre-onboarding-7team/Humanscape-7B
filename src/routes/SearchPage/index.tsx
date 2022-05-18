/* eslint-disable no-console */
import { ChangeEvent, FormEvent, useState } from 'react';

import SearchForm from './SearchForm';
import RecommendList from './RecommendList';

import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');

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
        <RecommendList searchValue={searchValue} />
      </section>
    </main>
  );
};

export default SearchPage;
