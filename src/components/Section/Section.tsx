import styles from "./Section.module.scss";

import React, {useState} from "react";
import {TwistingArrow} from "../TwistingArrow/TwistingArrow.tsx";
import classNames from "classnames";

interface SectionProps {
    title: string;
    subtitle?: string;
    paragraph: string;
}
export const Section: React.FC<SectionProps> = ({title, paragraph, subtitle}) => {
    const [isOpen, setIsOpen] = useState(false);
    const sectionClassNames = classNames({[styles.sectionVisible]: isOpen}, {[styles.sectionHidden]: !isOpen});
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.headingWrapper} onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <TwistingArrow isOpen={isOpen}/>
            </div>
            <div>{subtitle}</div>
            <p className={sectionClassNames}>{paragraph}</p>
        </section>
    );
};
//TODO: open p smoothly