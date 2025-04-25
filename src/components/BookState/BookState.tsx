import styles from './BookState.module.scss';
import { Indicator } from '../Indicator/Indicator.tsx';
import React from 'react';

interface BookStateProps {
  isActive: boolean;
  handleChange: (e: React.MouseEvent) => void;
}

export const BookState: React.FC<BookStateProps> = ({ isActive, handleChange }) => {
  return (
    <div className={styles.bookStateWrapper}>
      <div className={styles.indicatorWrapper}>
        <p>The book is {isActive ? 'active' : 'deactivated'}</p>
        <Indicator isActive={isActive} />
      </div>
      <button onClick={handleChange}>{isActive ? 'Deactivate' : 'Activate'}</button>
    </div>
  );
};
