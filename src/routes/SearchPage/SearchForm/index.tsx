import { ChangeEvent, FormEvent } from 'react';

import { SearchIcon } from 'assets/svgs';

import styles from './SearchForm.module.scss';

interface Props {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm = ({ onSubmit, onChange }: Props) => {
  return (
    <form className={styles.searchForm} onSubmit={onSubmit}>
      <div className={styles.searchInput}>
        <SearchIcon />
        <input type='text' placeholder='질환명을 입력해주세요' onChange={onChange} />
      </div>
      <button type='submit'>검색</button>
    </form>
  );
};

export default SearchForm;
