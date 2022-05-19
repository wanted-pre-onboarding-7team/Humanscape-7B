import { SearchIcon } from 'assets/svgs';
import { IItem } from 'types/disease.d';

import { highlightedText } from './utils';
import { getSearchIndex } from 'states/searchIndex';
import { getSearchValue } from 'states/searchValue';

import cx from 'classnames';
import styles from './RecommendList.module.scss';
import { useAppSelector } from 'hooks';

interface IProps {
  item: IItem;
  index: number;
}

const RecommendItem = ({ item, index }: IProps) => {
  const selectIndex = useAppSelector(getSearchIndex);
  const searchValue = useAppSelector(getSearchValue);

  return (
    <li key={item.sickCd} className={cx(styles.recommendItem, { [styles.selectedItem]: selectIndex === index })}>
      <button type='button' name={item.sickNm}>
        <SearchIcon className={styles.searchIcon} />
        <span className={styles.sickName}>{highlightedText(item.sickNm, searchValue)}</span>
      </button>
    </li>
  );
};

export default RecommendItem;
