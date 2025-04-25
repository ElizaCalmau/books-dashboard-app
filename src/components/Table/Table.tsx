import { Book, TABLE_HEADERS } from '../../lib/constants.ts';
import { Button } from '../Button/Button.tsx';
import { deleteBook } from '../../services/bookServices.ts';
import { ButtonLink } from '../ButtonLink/ButtonLink.tsx';
import styles from './Table.module.scss';
import { Loading } from '../Loading.tsx';
import { v4 as uuidv4 } from 'uuid';
import { ShieldCheckIcon, ShieldMinusIcon, SquarePenIcon, Trash2Icon } from 'lucide-react';
import classNames from 'classnames';
import { useHandleNavigation } from '../../hooks/useHandleNavigation.tsx';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { serviceHandler } from '../../utils/utils.ts';
import { useHandleBookStateUpdate } from '../../hooks/useHandleBookStateUpdate.ts';
export const Table = ({ books }: { books: Book[] }) => {
  const notify = (message: string) => {
    toast(message);
  };
  const handleNavigation = useHandleNavigation();
  const handleBookStateUpdate = useHandleBookStateUpdate();
  if (books.length > 0) {
    return (
      <>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeadRow}>
              {Object.values(TABLE_HEADERS)
                .slice(0, -1)
                .map(header => (
                  <th key={header} className={styles.tableHeadItem}>
                    {header}
                  </th>
                ))}
              <th className={styles.tableHeadItem}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 &&
              books.map((book: Book) => {
                const { id, active, ...rest } = book;
                return (
                  <tr
                    key={id}
                    className={styles.tableBodyRow}
                    onClick={() => handleNavigation(`/update-book/${id}`)}
                  >
                    {Object.values(rest).map(prop => {
                      const itemId = uuidv4();
                      return (
                        <td key={itemId} className={styles.tableDataItem}>
                          {prop}
                        </td>
                      );
                    })}
                    <td className={classNames(styles.tableDataItem, styles.buttonWrapper)}>
                      <ButtonLink icon={<SquarePenIcon />} path={`/update-book/${id}`} />
                      <Button
                        icon={<Trash2Icon />}
                        onClick={event => serviceHandler(event, id, deleteBook, notify)}
                      />
                      <Button
                        icon={book.active ? <ShieldCheckIcon /> : <ShieldMinusIcon />}
                        onClick={(event: React.MouseEvent) => {
                          event.stopPropagation();
                          void handleBookStateUpdate({ id, book, notify });
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <ToastContainer />
      </>
    );
  }
  return <Loading />;
};
