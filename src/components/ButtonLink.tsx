import React, {JSX} from "react";
import {NavLink} from "react-router";

interface Prop {
    text?: string,
    icon?: JSX.Element,
    path: string;
}

export const ButtonLink: React.FC<Prop> = ({text, icon, path}) => {
    return (
        <NavLink to={path}>
            {text || icon}
        </NavLink>

    );
};