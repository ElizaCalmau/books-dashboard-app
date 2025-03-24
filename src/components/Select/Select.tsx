import {CategoryOption, FilterOption, SelectProps} from "../../constants.ts";
import React from "react";
import styles from "./Select.module.scss";

export const Select: React.FC<SelectProps> = ({options, name, value, onChange, required}) => {
    return (
        <div className={styles.selectWrapper}>
        <select id={name} name={name} value={value} onChange={onChange} required={required}>
            {options?.map((option: CategoryOption | FilterOption) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>

        </div>
    );
};
