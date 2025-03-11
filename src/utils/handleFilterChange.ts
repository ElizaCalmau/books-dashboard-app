import React, {ChangeEvent, SetStateAction} from "react";
import {FilterOption, filterOptions} from "../constants.ts";

export const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>, setter: React.Dispatch<SetStateAction<FilterOption>>) => {
    const selectedFilter = filterOptions.find(option => option.value === e.target.value);
    if (selectedFilter) {
        setter(selectedFilter);
    }
}