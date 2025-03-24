import React, {SetStateAction} from "react";
import {FilterOption, filterOptions} from "../constants.ts";

export const handleFilterChange = (option: FilterOption, setter: React.Dispatch<SetStateAction<FilterOption>>) => {
    const selectedFilter = filterOptions.find(item => item.value === option.value);
    if (selectedFilter) {
        setter(selectedFilter);
    }
}