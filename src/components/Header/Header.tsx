import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <h1>Book Management Dashboard</h1>
            <h3>Easily add, delete, activate, and deactivate books in your collection.</h3>
        </div>
    );
};
