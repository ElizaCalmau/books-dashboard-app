import {CategoryOption, FilterOption, SelectProps} from "../constants.ts";
import React from "react";

export const Select: React.FC<SelectProps> = ({options, name, value, onChange}) => {
    return (
        <>
        <select id={name} name={name} value={value} onChange={onChange}>
            {options?.map((option: CategoryOption | FilterOption) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>

        </>
    );
};
