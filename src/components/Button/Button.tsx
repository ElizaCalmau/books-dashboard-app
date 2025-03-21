import React, {JSX} from "react";
import styles from "./Button.module.scss";
interface Prop {
    text?: string,
    icon?: JSX.Element,
    onClick: () => void;
}

export const Button: React.FC<Prop> = ({text, onClick, icon}) => {
    return (
        <div onClick={onClick} className={styles.button}>
            {text || icon}
        </div>
    );
};

