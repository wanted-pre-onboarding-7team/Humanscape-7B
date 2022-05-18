import { SearchIcon } from 'assets/svgs';
import { IItem } from 'types/disease.d';

import Spinner from 'components/Spinner';

import styles from './RecommendList.module.scss';

interface IProps {
  recommend: IItem[] | undefined;
  searchValue: string;
  isLoading: boolean;
}

const RecommendList = ({ recommend, searchValue, isLoading }: IProps) => {
  const noResult = !isLoading && !recommend && searchValue;

  if (!searchValue) return null;

  return (
    <div className={styles.recommend}>
      <span className={styles.recommendTitle}>추천 검색어</span>
      {isLoading && <Spinner />}
      {noResult && <span className={styles.noResult}>검색어 없음</span>}
      <ul className={styles.recommendList}>
        {Array.isArray(recommend) &&
          recommend.map((item) => (
            <li key={item.sickCd} className={styles.recommendItem}>
              <button type='button' name={item.sickNm}>
                <SearchIcon className={styles.searchIcon} />
                <span className={styles.sickName}>{item.sickNm}</span>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecommendList;
