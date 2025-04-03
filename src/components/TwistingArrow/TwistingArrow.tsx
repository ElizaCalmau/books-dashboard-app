import {ChevronDown} from "lucide-react";
import styles from "./TwistingArrow.module.scss";
import React from "react";

interface Props {
    isOpen: boolean;
}

export const TwistingArrow: React.FC<Props> = ({isOpen}) => {
    return (
        <ChevronDown className={isOpen ? styles.arrowUp : styles.arrowDown} />
    );
};
