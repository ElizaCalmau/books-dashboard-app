import {BookmarkPlus, BookOpenIcon, ShieldCheckIcon} from "lucide-react";
import {v4 as uuidv4} from "uuid";
import styles from "./Sidebar.module.scss"
import {ButtonLink} from "../ButtonLink.tsx";
export const Sidebar = () => {
    const id = uuidv4()
    return (
        <div className={styles.sidebarWrapper}>
            <ButtonLink path='/' icon={<BookOpenIcon size={50}/>}/>
            <ButtonLink path={`/${id}`} icon={<BookmarkPlus size={50}/>}/>
        </div>
    );
};
