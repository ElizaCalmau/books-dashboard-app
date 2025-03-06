import React, {ChangeEvent, ChangeEventHandler} from "react";

interface Props {
    name: string;
    label: string;
    placeholder?: string | undefined;
    value: string | number;
    onChange: (value: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
    validator?: (value: string | number) => boolean;
    type?: 'string' | 'number';
    options?: {label: string, value: string}[];
}

export const InputLabel: React.FC<Props> = ({name, label, placeholder, value, onChange, type, options}) => {

    return (
        <><label htmlFor={name}> {label}</label>
            {options ? (
                    <select id={name} name={name} value={value} onChange={onChange}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ) :
            (<input required type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} />) }
                </>
    );
};
