import styles from './Dropdown.module.scss';
import React from 'react';
import classNames from 'classnames';
import { CategoryOption, FilterOption } from '../../lib/constants.ts';
import { useLocation } from 'react-router';

interface DropdownProps {
  isOpen?: boolean;
  options: FilterOption[] | CategoryOption[];
  onClick: (value: FilterOption | CategoryOption) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ isOpen, options, onClick }) => {
  const location = useLocation();
  const editPage = location.pathname.split('/').some(el => el == 'update-book');
  const dropdownClassNames = classNames(styles.dropdown, { [styles.open]: isOpen });
  const optionClassNames = classNames(styles.option, { [styles.editPageOption]: editPage });
  return (
    <>
      <ul className={dropdownClassNames}>
        {options.map(option => (
          <li key={option.value} className={optionClassNames} onClick={() => onClick(option)}>
            {option.label}
          </li>
        ))}
      </ul>
    </>
  );
};
