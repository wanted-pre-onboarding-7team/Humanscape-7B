import { useState, useEffect } from 'react';

import { IItem } from 'types/disease.d';

import RecommendItem from './Item';
import Spinner from 'components/Spinner';

import styles from './RecommendList.module.scss';

interface IProps {
  data: IItem[];
  isLoading: boolean;
  isError: boolean;
  debouncedValue: string;
}

const RecommendList = ({ data, isLoading, isError, debouncedValue }: IProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');

    if (isLoading || data.length) return;

    if (isError) {
      setErrorMessage('현재 추천 검색어를 가져올 수 없음');
      return;
    }

    setErrorMessage('검색어 없음');
  }, [data.length, isError, isLoading]);

  const recommendItems = data.map((item: IItem, index: number): JSX.Element => {
    return <RecommendItem key={item.sickCd} sickName={item.sickNm} index={index} />;
  });

  if (!debouncedValue) return null;

  return (
    <div className={styles.recommend}>
      <span className={styles.recommendTitle}>추천 검색어</span>
      {isLoading && <Spinner />}
      {errorMessage && <span className={styles.noResult}>{errorMessage}</span>}
      <ul className={styles.recommendList}>{recommendItems}</ul>
    </div>
  );
};

export default RecommendList;
