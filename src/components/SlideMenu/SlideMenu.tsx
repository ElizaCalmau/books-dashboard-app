import styles from './slideMenu.module.scss';
import {BookIcon, BookmarkPlusIcon} from "lucide-react";
import classNames from "classnames";
import {v4 as uuidv4} from "uuid";
import {ButtonLink} from "../ButtonLink/ButtonLink.tsx";
import {useState} from "react";

export const SlideMenu = ({isOpen}: {isOpen: boolean}) => {
    const slideMenuClassNames = classNames(styles.slideMenuHidden, {[styles.slideMenuVisible]: isOpen});
    const [id] = useState(() => uuidv4());
    return (
        <div className={slideMenuClassNames}>
            <ButtonLink path='/' icon={<BookIcon size={30}/>}/>
            <ButtonLink path={`/update-book/${id}`} icon={<BookmarkPlusIcon size={30}/>}/>
        </div>
    );
};
