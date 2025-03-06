import React from "react";
import {NavLink} from "react-router";

interface Prop {
    text: string,
    id: string;
}

export const ButtonLink: React.FC<Prop> = ({text, id}) => {
    return (
        <NavLink to={`/${id}`}> <div>
            {text}
        </div>
        </NavLink>

    );
};