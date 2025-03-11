import {InputField} from "../constants.ts";
import React from "react";
import {Select} from "./Select.tsx";

interface Prop {
    field: InputField,
    onChange?: (value: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void,
}

export const InputLabel: React.FC<Prop> = ({field, onChange}) => {
    const {value, label, placeholder, name, options, type, required} = field;
    return (
        <><label htmlFor={name}> {label}</label>
            {options ?
                <Select value={value} name={name} onChange={onChange} type={type} required={required} options={options}/>
                :
                (<input required={required} type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} />)
            }
        </>
    );
};
