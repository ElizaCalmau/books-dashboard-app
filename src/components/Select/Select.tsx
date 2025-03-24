import {SelectProps} from "../../constants.ts";
import React, {useState} from "react";
import styles from "./Select.module.scss";
import classNames from "classnames";
import {ChevronDown} from "lucide-react";

export const Select: React.FC<SelectProps> = ({options, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownClassNames = classNames(styles.dropdown, {[styles.open]: isOpen});
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={styles.selectWrapper} onClick={toggleOpen}>
            <div className={styles.selectedOption}>
                {value} <ChevronDown className={isOpen ? styles.arrowUp : styles.arrowDown} />
            </div>
            <ul className={dropdownClassNames}>
                {options.map((option) => (
                    <li className={styles.option} onClick={() => onChange(option)}>{option.label}</li>
                ))}
            </ul>
        </div>
    );
};
