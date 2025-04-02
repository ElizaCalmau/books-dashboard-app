import {CategoryOption, FilterOption, InputField} from "../../constants.ts";
import React from "react";
import {Select} from "../Select/Select.tsx";
import styles from './InputLabel.module.scss'

interface Prop {
    field: InputField,
    onChange: (value: React.ChangeEvent<HTMLInputElement> | CategoryOption | FilterOption) => void,
}

export const InputLabel: React.FC<Prop> = ({field, onChange}) => {
    const {value, label, placeholder, name, options, type, required} = field;
    return (
        <>
            <label className={styles.label} htmlFor={name}> {label}</label>
            {options ?
                <Select value={value} options={options} onClick={onChange}/>
                :
                <input className={styles.customInput} required={required} type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} />
            }
        </>
    );
};
