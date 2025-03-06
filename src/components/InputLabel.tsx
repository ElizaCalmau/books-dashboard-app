import {ChangeEvent} from "react";

interface Props {
    name: string;
    label: string;
    placeholder?: string | undefined;
    value: string | number;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    validator?: (value: string | number) => boolean;
    type: 'string' | 'number';

}

export const InputLabel: React.FC<Props> = ({name, label, placeholder, value, onChange, type}) => {

    return (
        <><label htmlFor={name}> {label}</label>
            <input required type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} /></>
    );
};
