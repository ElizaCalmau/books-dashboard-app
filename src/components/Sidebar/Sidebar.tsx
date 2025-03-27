import {BookmarkPlus, BookOpenIcon} from "lucide-react";
import {v4 as uuidv4} from "uuid";
import styles from "./Sidebar.module.scss"
import {ButtonLink} from "../ButtonLink/ButtonLink.tsx";
export const Sidebar = () => {
    const id = uuidv4()
    return (
        <div className={styles.sidebarWrapper}>
            <div className={styles.buttonContainer}>
                <ButtonLink path='/' icon={<BookOpenIcon size={30}/>} text="Home"/>
                <ButtonLink path={`/update-book/${id}`} icon={<BookmarkPlus size={30}/>} text="Add Book"/>
            </div>
        </div>
    );
};
