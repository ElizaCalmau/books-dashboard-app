import {Book, TABLE_HEADERS} from "../../constants.ts";
import {Button} from "../Button.tsx";
import {deleteBook, getAllBooks, updateBookState} from "../../utils/bookService.ts";
import {ButtonLink} from "../ButtonLink.tsx";
import styles from './Table.module.scss'
import {Loading} from "../Loading.tsx";
import { v4 as uuidv4 } from 'uuid';
import {useBooksContext} from "../../context/BooksContext.tsx";

export const Table = ({books} : {books: Book[]}) => {

     const handleBookStateUpdate = async({id, book} :{id: string, book: Book}) => {
         const {setBooksList} = useBooksContext();
         await updateBookState({id, isActivated: !book.active});
        const freshBooks = await getAllBooks();
        setBooksList(freshBooks);
     }
     
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
                        return <tr key={id} className={styles.tableRow}>
                            {Object.values(rest).map((prop) => {
                                const itemId = uuidv4()
                                console.log(prop)
                                    return <td key={itemId} className={styles.tableDataItem}>
                                            {prop}
                                        </td>

                            })}

                            <td className={styles.tableDataItem}>
                                <ButtonLink text='Edit' id={id}/>


                                <Button text='Delete' onClick={() => deleteBook(id)}/>


                                <Button text={book.active ? 'Deactivate' : 'Activate'} onClick={()=>handleBookStateUpdate({id, book})}/>


                                {/*State: {book.active ? 'activated' : 'deactivated'}*/}
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

