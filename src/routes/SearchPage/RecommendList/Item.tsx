import cx from 'classnames';

import { SearchIcon } from 'assets/svgs';
import { useAppSelector } from 'hooks';
import { getRecommendIndex } from 'states/recommendIndex';
import { getSearchValue } from 'states/searchValue';

import { highlightedText } from './utils';
import { SEARCH_URL } from '../constants';

import styles from './RecommendList.module.scss';

interface IProps {
  sickName: string;
  index: number;
}

const RecommendItem = ({ sickName, index }: IProps) => {
  const selectIndex = useAppSelector(getRecommendIndex);
  const searchValue = useAppSelector(getSearchValue);

  return (
    <li className={cx(styles.recommendItem, { [styles.selectedItem]: selectIndex === index })}>
      <a href={`${SEARCH_URL}${sickName}`}>
        <SearchIcon className={styles.searchIcon} />
        <span className={styles.sickName}>{highlightedText(sickName, searchValue)}</span>
      </a>
    </li>
  );
};

export default RecommendItem;
