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
                    <thead className={styles.head}>
                    <tr>
                        {Object.values(TABLE_HEADERS).slice(0, -1).map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.length > 0 && books.map((book: Book) => {
                        const {id, ...rest} = book;
                        return ( <tr key={id}>
                            {Object.values(rest).map((prop) => {
                                const itemId = uuidv4()
                                    return(<td key={itemId}>
                                            {prop}
                                        </td>)

                            })}
                            <td>
                                <ButtonLink text='Edit' id={id}/>
                            </td>
                            <td>
                                <Button text='Delete' onClick={() => deleteBook(id)}/>
                            </td>
                            <td>
                                <Button text={book.active ? 'Deactivate' : 'Activate'} onClick={()=>handleBookStateUpdate({id, book})}/>
                            </td>
                            <td>
                                Book state: {book.active ? 'activated' : 'deactivated'}
                            </td>
                        </tr>)

                    })}
                    </tbody>
                </table>
            </>
        );
    }
    return <Loading/>

};

