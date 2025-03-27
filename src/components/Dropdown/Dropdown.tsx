import styles from "./Dropdown.module.scss";
import React from "react";
import classNames from "classnames";
import {CategoryOption, FilterOption} from "../../constants.ts";

interface DropdownProps {
    isOpen?: boolean,
    options: FilterOption[] | CategoryOption[],
    onClick: (value: FilterOption | CategoryOption) => void,
}

export const Dropdown: React.FC<DropdownProps> = ({isOpen, options, onClick}) => {
    const dropdownClassNames = classNames(styles.dropdown, {[styles.open]: isOpen});
    return (
        <>
            <ul className={dropdownClassNames}>
                {options.map((option) => (
                    <li className={styles.option} onClick={() => onClick(option)}>{option.label}</li>
                ))}
            </ul>
        </>
    );
}
