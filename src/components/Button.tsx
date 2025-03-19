import React, {JSX} from "react";
interface Prop {
    text?: string,
    icon?: JSX.Element,
    onClick: () => void;
}

export const Button: React.FC<Prop> = ({text, onClick, icon}) => {
    return (
        <div onClick={onClick}>
            {text || icon}
        </div>
    );
};

