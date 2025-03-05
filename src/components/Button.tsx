import React from "react";
interface Prop {
    text: string,
    onClick: () => void;
}

const Button: React.FC<Prop> = ({text, onClick}) => {
    return (
        <div onClick={onClick}>
            {text}
        </div>
    );
};

export default Button;