import styles from './AboutPage.module.scss';
import {Header} from "../Header/Header.tsx";
import {Section} from '../Section/Section.tsx'
import {aboutSections} from "../../constants.ts";
export const AboutPage = () => {

    return (
        <div className={styles.aboutWrapper}>
            <Header />
            <main>
                {aboutSections.map(({title, subtitle, paragraphs, list}) => (
                    <Section key={title} title={title} subtitle={subtitle} paragraphs={paragraphs} list={list} />
                ))}
            </main>

            <footer>
                <p>&copy; 2025 Books Dashboard Application. All rights reserved.</p>
            </footer>
        </div>
    );
};
