import { SearchIcon } from 'assets/svgs';

import styles from './RecommendList.module.scss';

interface Props {
  searchValue: string;
}

const RecommendList = ({ searchValue }: Props) => {
  if (!searchValue) return null;

  return (
    <div className={styles.recommend}>
      <span className={styles.recommendTitle}>추천 검색어</span>
      <ul className={styles.recommendList}>
        <li className={styles.recommendItem}>
          <button type='button'>
            <SearchIcon className={styles.searchIcon} />
            <span className={styles.sickName}>질환명</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RecommendList;
