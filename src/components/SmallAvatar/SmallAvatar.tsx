import styles from './SmallAvatar.module.scss';
import image from '../../assets/small_ph.png';

export const SmallAvatar = () => {
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
