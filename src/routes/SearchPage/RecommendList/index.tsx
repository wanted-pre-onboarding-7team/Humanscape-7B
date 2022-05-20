import { IItem } from 'types/disease.d';

import RecommendItem from './Item';
import Spinner from 'components/Spinner';

import styles from './RecommendList.module.scss';
import { useState, useEffect } from 'react';

interface IProps {
  data: IItem[];
  debouncedValue: string;
  isLoading: boolean;
  isError: boolean;
}

const RecommendList = ({ data, debouncedValue, isLoading, isError }: IProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  // refactor
  const noResult = !isLoading && !data.length && debouncedValue;

  useEffect(() => {
    setErrorMessage('');

    if (isError) {
      setErrorMessage('현재 추천 검색어를 가져올 수 없음');

      return;
    }

    if (noResult) {
      setErrorMessage('검색어 없음');
    }
  }, [isError, noResult]);

  if (!debouncedValue) return null;

  // refactor
  return (
    <div className={styles.recommend}>
      <span className={styles.recommendTitle}>추천 검색어</span>
      {isLoading && <Spinner />}
      {errorMessage && <span className={styles.noResult}>{errorMessage}</span>}
      <ul className={styles.recommendList}>
        {Array.isArray(data) &&
          data.map((item, index) => <RecommendItem key={item.sickCd} sickName={item.sickNm} index={index} />)}
      </ul>
    </div>
  );
};

export default RecommendList;
