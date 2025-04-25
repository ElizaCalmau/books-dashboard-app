import styles from './DesktopAvatar.module.scss';
import image from '../../assets/ph.png';

export const DesktopAvatar = () => {
  return (
    <div className={styles.avatarWrapper}>
      <a
        href="https://www.linkedin.com/in/yelyzaveta-lysenko-ab452b287/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image} alt="Elizabeth's photo" />
        <p>Elizabeth, Frontend Engineer</p>
        <span>React, TypeScript, Next.js</span>
      </a>
    </div>
  );
};
