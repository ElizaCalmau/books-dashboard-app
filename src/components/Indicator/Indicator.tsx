import classNames from 'classnames';
import styles from './Indicator.module.scss';

export const Indicator = ({ isActive }: { isActive: boolean }) => {
  const bookIndicatorClass = classNames(
    { [styles.bookActive]: isActive },
    { [styles.bookInactive]: !isActive }
  );
  return <div className={bookIndicatorClass}></div>;
};
