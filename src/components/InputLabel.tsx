import {CategoryOption, InputField} from "../constants.ts";
import React from "react";

interface Prop {
    field: InputField,
    onChange?: (value: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void,
}

export const InputLabel: React.FC<Prop> = ({field, onChange}) => {
    const {value, label, placeholder, name, options, type, required} = field;
    return (
        <><label htmlFor={name}> {label}</label>
            {options ? (
                    <select id={name} name={name} value={value} onChange={onChange}>
                        {options.map((option: CategoryOption) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ) :
            (<input required={required} type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} />) }
                </>
    );
};
