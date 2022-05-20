import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';

import { SearchIcon } from 'assets/svgs';
import { useAppDispatch, useAppSelector } from 'hooks';
import { recommendIndexActions, getRecommendIndex } from 'states/recommendIndex';
import { searchValueActions, getSearchValue } from 'states/searchValue';
import { IItem } from 'types/disease.d';

import { SEARCH_URL } from '../constants';

import styles from './SearchForm.module.scss';

interface IProps {
  data: IItem[];
}

const SearchForm = ({ data }: IProps) => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(getSearchValue);
  const recommendIndex = useAppSelector(getRecommendIndex);

  const [isArrowKey, setIsArrowKey] = useState(false);

  const getSelectedValue = () => {
    if (recommendIndex > -1 && data.length) return data[recommendIndex].sickNm;

    return searchValue;
  };

  const selectedValue = getSelectedValue();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `${SEARCH_URL}${selectedValue}`;
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isArrowKey) return;

    dispatch(searchValueActions.setSearchValue(e.currentTarget.value));
    dispatch(recommendIndexActions.resetIndex());
  };

  const onKeyDown = (e: KeyboardEvent) => {
    setIsArrowKey(false);

    if (e.nativeEvent.isComposing) return;

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      dispatch(recommendIndexActions.decreaseIndex(data.length));
      setIsArrowKey(true);
    }

    if (e.key === 'ArrowDown') {
      dispatch(recommendIndexActions.increaseIndex(data.length));
      setIsArrowKey(true);
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={onSubmit}>
      <div className={styles.searchInput}>
        <SearchIcon />
        <input
          type='text'
          placeholder='질환명을 입력해주세요'
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={selectedValue}
        />
      </div>
      <button type='submit'>검색</button>
    </form>
  );
};

export default SearchForm;
