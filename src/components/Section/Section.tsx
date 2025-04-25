import styles from './Section.module.scss';

import React, { useState } from 'react';
import { TwistingArrow } from '../TwistingArrow/TwistingArrow.tsx';
import classNames from 'classnames';
import { SectionProps } from '../../lib/constants.ts';

export const Section: React.FC<SectionProps> = ({ title, paragraphs, list, subtitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const headingClassNames = classNames(styles.headingWrapper, { [styles.activeHeading]: isOpen });
  const sectionClassNames = classNames(
    { [styles.sectionContentVisible]: isOpen },
    { [styles.sectionContentHidden]: !isOpen }
  );
  return (
    <section className={styles.sectionWrapper}>
      <div className={headingClassNames} onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <TwistingArrow isOpen={isOpen} />
      </div>

      <div className={sectionClassNames}>
        <h3>{subtitle}</h3>
        {paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <ul>
          {list?.map(({ name, description, url }) => (
            <li key={name}>
              <span>{name} </span>
              {description && <p>{description}</p>}
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
