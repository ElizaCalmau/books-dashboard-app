import {Book, TABLE_HEADERS} from "../../constants.ts";
import {Button} from "../Button/Button.tsx";
import {deleteBook, getAllBooks, updateBookState} from "../../utils/bookService.ts";
import {ButtonLink} from "../ButtonLink/ButtonLink.tsx";
import styles from './Table.module.scss'
import {Loading} from "../Loading.tsx";
import { v4 as uuidv4 } from 'uuid';
import {useBooksContext} from "../../context/BooksContext.tsx";
import {
    ShieldCheckIcon,
    ShieldMinusIcon,
    SquarePenIcon,
    Trash2Icon
} from "lucide-react";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";

export const Table = ({books} : {books: Book[]}) => {

     const handleBookStateUpdate = async({id, book} :{id: string, book: Book}) => {
         const {setBooksList} = useBooksContext();
         await updateBookState({id, isActivated: !book.active});
        const freshBooks = await getAllBooks();
        setBooksList(freshBooks);
     }
     const navigate = useNavigate();
     const handleNavigation = ( path : string) => navigate(path);
    if(books.length > 0){
        return (
            <>
                <table className={styles.table}>
                    <thead>
                    <tr className={styles.tableHeadRow}>
                        {Object.values(TABLE_HEADERS).slice(0, -1).map((header) => (
                            <th key={header} className={styles.tableHeadItem}>{header}</th>
                        ))}
                        <th className={styles.tableHeadItem}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.length > 0 && books.map((book: Book) => {
                        const {id, active, ...rest} = book;
                        return <tr key={id} className={styles.tableRow} onClick={() => handleNavigation(`/update-book/${id}`)}>
                            {Object.values(rest).map((prop) => {
                                const itemId = uuidv4()
                                    return <td key={itemId} className={styles.tableDataItem}>
                                            {prop}
                                        </td>

                            })}
                            <td className={classNames(styles.tableDataItem, styles.buttonWrapper)}>
                                <ButtonLink icon={<SquarePenIcon />} path={`/update-book/${id}`}/>
                                <Button icon={<Trash2Icon />} onClick={() => deleteBook(id)}/>
                                <Button icon={book.active ? <ShieldMinusIcon /> : <ShieldCheckIcon />} onClick={()=>handleBookStateUpdate({id, book})}/>
                                {/*TODO: make a green or red light for book state*/}
                            </td>
                        </tr>

                    })}
                    </tbody>
                </table>
            </>
        );
    }
    return <Loading/>

};

