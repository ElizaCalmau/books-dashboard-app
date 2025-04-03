import styles from "./Section.module.scss";

import React, {useState} from "react";
import {TwistingArrow} from "../TwistingArrow/TwistingArrow.tsx";

interface SectionProps {
    title: string;
    paragraph: string;
}
export const Section: React.FC<SectionProps> = ({title, paragraph}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.headingWrapper} onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <TwistingArrow isOpen={isOpen}/>
            </div>
            <p className={isOpen ? styles.open : styles.close}>{paragraph}</p>
        </section>
    );
};
//TODO: open p smoothly