import styles from './ContactsPage.module.scss';
import {Section} from "../Section/Section.tsx";
import {contactsSection} from "../../constants.ts";
import {DesktopAvatar} from "../DesktopAvatar/DesktopAvatar.tsx";
import {SmallAvatar} from "../SmallAvatar/SmallAvatar.tsx";

export const ContactsPage = () => {
    return (
        <div className={styles.contactsPageWrapper}>
            <h1>My Journey & Inspiration</h1>
            <div className={styles.introductionWrapper}>
                    <div className={styles.aboutMe}>
                        <h3>
                            Hello, I'm Elizabeth, a frontend engineer passionate about building intuitive and efficient web applications.
                        </h3>
                        <article>
                            {contactsSection.map(({title, paragraphs, subtitle, list}) => (
                                <Section key={title} title={title} paragraphs={paragraphs} subtitle={subtitle} list={list} />
                            ))}
                        </article>
                    </div>
                <DesktopAvatar />
                <SmallAvatar />
            </div>
        </div>
    );
};
