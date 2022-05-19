import { IItem } from 'types/disease.d';

import RecommendItem from './Item';
import Spinner from 'components/Spinner';

import styles from './RecommendList.module.scss';

interface IProps {
  data: IItem[];
  debouncedValue: string;
  isLoading: boolean;
}

const RecommendList = ({ data, debouncedValue, isLoading }: IProps) => {
  const noResult = !isLoading && !data.length && debouncedValue;

  if (!debouncedValue) return null;

  return (
    <div className={styles.recommend}>
      <span className={styles.recommendTitle}>추천 검색어</span>
      {isLoading && <Spinner />}
      {noResult && <span className={styles.noResult}>검색어 없음</span>}
      <ul className={styles.recommendList}>
        {Array.isArray(data) &&
          data.map((item, index) => <RecommendItem key={item.sickCd} item={item} index={index} />)}
      </ul>
    </div>
  );
};

export default RecommendList;
