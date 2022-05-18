import styles from './Routes.module.scss';

import SearchPage from './SearchPage';

const App = () => {
  return (
    <div className={styles.app}>
      <SearchPage />
    </div>
  );
};

export default App;
