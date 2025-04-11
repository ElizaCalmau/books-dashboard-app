import styles from './ContactsPage.module.scss';
import image from '../../assets/ph.png';
export const ContactsPage = () => {
    return (
        <div className={styles.contactsPageWrapper}>
            <h1>My Journey & Inspiration</h1>
            <div>
                <img src={image} alt="Elizabeth's photo" />
            </div>
        </div>
    );
};
