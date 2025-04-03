import {SelectProps} from "../../constants.ts";
import React, {useState} from "react";
import styles from "./Select.module.scss";
import classNames from "classnames";
import {ChevronDown} from "lucide-react";
import {useLocation} from "react-router";
import {Dropdown} from "../Dropdown/Dropdown.tsx";

export const Select: React.FC<SelectProps> = ({options, value, onClick}) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const editPage = location.pathname.split("/").some((el) => el == 'update-book');
    const selectClassName = classNames(styles.selectWrapper, {[styles.editPageSelect]: editPage});
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    const option = options?.find(option => option.label.toLowerCase() == value);
    return (
        <div className={selectClassName} onClick={toggleOpen}>
            <div className={styles.selectedOption}>
                {option?.label} <ChevronDown className={isOpen ? styles.arrowUp : styles.arrowDown} />
            </div>
            <Dropdown onClick={onClick} isOpen={isOpen} options={options}/>
        </div>
    );
};
