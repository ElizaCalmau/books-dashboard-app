import React, {JSX} from "react";
import {NavLink, useLocation} from "react-router";
import styles from "./ButtonLink.module.scss";

interface Prop {
    text?: string,
    icon?: JSX.Element,
    path: string;
}

export const ButtonLink: React.FC<Prop> = ({text, icon, path}) => {
    const location = useLocation();
    console.log('path', path);
    const isActive = location.pathname === path;
    console.log('loc, pathname',location.pathname);
    return (
            <NavLink to={path} className={isActive ? styles.activeButtonLink: styles.buttonLink}>
                {icon} {text}
            </NavLink>
    );
};