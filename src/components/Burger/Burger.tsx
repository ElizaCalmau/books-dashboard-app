import styles from './Burger.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { SlideMenu } from '../SlideMenu/SlideMenu.tsx';

export const Burger = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const barClassNames = classNames(styles.bar, { [styles.cross]: toggle });
  return (
    <>
      <div className={styles.burgerWrapper}>
        <SlideMenu isOpen={toggle} />
        <div className={styles.buttonWrapper} onClick={() => setToggle(!toggle)}>
          <div className={barClassNames}></div>
          <div className={barClassNames}></div>
          <div className={barClassNames}></div>
        </div>
      </div>
    </>
  );
};
