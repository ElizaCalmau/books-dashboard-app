import {SelectProps} from "../../lib/constants.ts";
import React, {useState} from "react";
import styles from "./Select.module.scss";
import classNames from "classnames";
import {useLocation} from "react-router";
import {Dropdown} from "../Dropdown/Dropdown.tsx";
import {TwistingArrow} from "../TwistingArrow/TwistingArrow.tsx";

export const Select: React.FC<SelectProps> = ({options, value, onClick}) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const editPage = location.pathname.split("/").some((el) => el == 'update-book');
    const selectClassName = classNames(styles.selectWrapper, {[styles.editPageSelect]: editPage});
    const selectedOptionClassName = classNames(styles.selectedOption, {[styles.selectedOptionEditPage]: editPage});

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    const option = options?.find(option => option.label.toLowerCase() == value.toLowerCase());
    return (
        <div className={selectClassName} onClick={toggleOpen}>
            <div className={selectedOptionClassName}>
                {option?.label} <TwistingArrow isOpen={isOpen} />
            </div>
            <Dropdown onClick={onClick} isOpen={isOpen} options={options}/>
        </div>
    );
};
