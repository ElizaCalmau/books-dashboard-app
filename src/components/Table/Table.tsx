import {Book, TABLE_HEADERS} from "../../constants.ts";
import {useGetBooks} from "../../hooks/useGetBooks.ts";
import {Button} from "../Button.tsx";
import {deleteBook} from "../../utils/bookService.ts";
import {ButtonLink} from "../ButtonLink.tsx";
import styles from './Table.module.scss'
import {useBooksListContext} from "../../context/BooksListContext.tsx";
import {Loading} from "../Loading.tsx";


export const Table = () => {
    useGetBooks();
    const {booksList} = useBooksListContext();
    if(booksList.length > 0){
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
                    {booksList.length > 0 && booksList.map((book: Book) => {
                        const {id, ...rest} = book;
                        return ( <tr key={id}>
                            {Object.values(rest).map((item) => (
                                <td key={id}>
                                    {item}
                                </td>
                            ))}
                            <td>
                                <ButtonLink text='Edit' id={id}/>
                            </td>
                            <td>
                                <Button text='Delete' onClick={() => deleteBook(id)}/>
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

